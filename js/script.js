/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	},
	'Types': {
		title: 'Types of Microaggressions',
		subtitle: 'Understanding Different Categories',
		body: `
			<p><strong>Environmental:</strong> Subtle messages in our physical surroundings</p>
			<p><strong>Verbal:</strong> Comments or questions that carry hidden assumptions</p>
			<p><strong>Behavioral:</strong> Actions that subtly discriminate or exclude</p>
			<p><strong>Institutional:</strong> Systemic policies or practices that disadvantage certain groups</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome to Understanding Microaggressions',
		body: 'An interactive learning experience about recognizing and addressing microaggressions',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	'characters/alex/default.png': 'characters/alex/default.png',
	'characters/professor/default.png': 'characters/professor/default.png',
	'characters/coworker/default.png': 'characters/coworker/default.png',
	'characters/student/default.png': 'characters/student/default.png',
	'characters/manager/default.png': 'characters/manager/default.png',
	'characters/colleague/default.png': 'characters/colleague/default.png'
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'office': 'office.jpg',
	'classroom': 'classroom.jpg',
	'meeting': 'meeting.jpg',
	'breakroom': 'breakroom.jpg',
	'hallway': 'hallway.jpg'

});


// Define the Characters
monogatari.characters ({
	'alex': {
		name: 'Alex',
		color: '#3498db',
		directory: 'alex',
		sprites: {
			default: 'default.png'
		}
	},
	'professor': {
		name: 'Professor',
		color: '#2c3e50',
		directory: 'professor',
		sprites: {
			default: 'default.png'
		}
	},
	'coworker': {
		name: 'Coworker',
		color: '#e74c3c',
		directory: 'coworker',
		sprites: {
			default: 'default.png'
		}
	},
	'student': {
		name: 'Student',
		color: '#27ae60',
		directory: 'student',
		sprites: {
			default: 'default.png'
		}
	},
	'manager': {
		name: 'Manager',
		color: '#8e44ad',
		directory: 'manager',
		sprites: {
			default: 'default.png'
		}
	},
	'colleague': {
		name: 'Colleague',
		color: '#d35400',
		directory: 'colleague',
		sprites: {
			default: 'default.png'
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene office with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'Before we begin, what is your name?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					monogatari.storage({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					monogatari.storage({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'Please enter your name to continue.'
			}
		},
		'jump Start_Dialogue'
	],

	'Start_Dialogue': [
		'show character alex default at center with fadeIn',
		'alex "Welcome {{player.name}}! I\'m Alex, and I\'ll be your guide through this interactive learning experience about microaggressions."',
		'show message Types',
		'alex "Today, we\'ll explore different types of microaggressions and learn effective ways to respond to them."',
		'alex "Which scenario would you like to explore first?"',
		{
			'Choice': {
				'Environmental Microaggression': {
					'Text': 'Environmental Microaggression',
					'Do': 'jump Environmental'
				},
				'Verbal Microaggression': {
					'Text': 'Verbal Microaggression',
					'Do': 'jump Verbal'
				},
				'Behavioral Microaggression': {
					'Text': 'Behavioral Microaggression',
					'Do': 'jump Behavioral'
				},
				'Institutional Microaggression': {
					'Text': 'Institutional Microaggression',
					'Do': 'jump Institutional'
				}
			}
		}
	],

	'Environmental': [
		'show scene hallway with fadeIn',
		'show character alex default at center with fadeIn',
		'alex "Environmental microaggressions are subtle messages in our physical surroundings that make certain groups feel unwelcome."',
		'next',
		'alex "For example, imagine walking down this hallway..."',
		'next',
		'show character colleague default at center with fadeIn',
		'colleague "Have you noticed that all the leadership photos on our wall are of one demographic? It\'s a bit discouraging."',
		'next',
		{
			'Choice': {
				'Acknowledge and suggest change': {
					'Text': 'Acknowledge and suggest change',
					'Do': 'jump Environmental_Good'
				},
				'Dismiss the observation': {
					'Text': 'Dismiss the observation',
					'Do': 'jump Environmental_Bad'
				},
				'Avoid the topic': {
					'Text': 'Avoid the topic',
					'Do': 'jump Environmental_Neutral'
				}
			}
		}
	],

	'Environmental_Good': [
		'show character alex default at center with fadeIn',
		'alex "Excellent choice, {{player.name}}! Acknowledging the issue and suggesting change is proactive."',
		'next',
		'alex "You could say: \'You\'re right. We should bring this up in the next diversity and inclusion meeting. Having diverse representation in leadership photos matters.\'"',
		'next',
		'alex "This response shows awareness and commitment to positive change."',
		'jump Next_Choice'
	],

	'Environmental_Bad': [
		'show character alex default at center with fadeIn',
		'alex "While it might seem easier to dismiss the observation, {{player.name}}, this approach doesn\'t address the underlying issue."',
		'next',
		'alex "Let\'s try a more constructive approach."',
		'jump Environmental_Good'
	],

	'Environmental_Neutral': [
		'show character alex default at center with fadeIn',
		'alex "Avoiding the topic might seem comfortable, {{player.name}}, but it allows the issue to persist."',
		'next',
		'alex "Let\'s try a more proactive approach."',
		'jump Environmental_Good'
	],

	'Verbal': [
		'show scene meeting with fadeIn',
		'show character manager default at center with fadeIn',
		'manager "You\'re so well-spoken! You don\'t sound like other people from your neighborhood."',
		'next',
		'show character alex default at center with fadeIn',
		'alex "This is a verbal microaggression that implies prejudiced expectations based on someone\'s background."',
		'next',
		{
			'Choice': {
				'Address the underlying bias': {
					'Text': 'Address the underlying bias',
					'Do': 'jump Verbal_Good'
				},
				'Accept it as a compliment': {
					'Text': 'Accept it as a compliment',
					'Do': 'jump Verbal_Bad'
				},
				'Change the subject': {
					'Text': 'Change the subject',
					'Do': 'jump Verbal_Neutral'
				}
			}
		}
	],

	'Verbal_Good': [
		'show character alex default at center with fadeIn',
		'alex "Well done, {{player.name}}! Addressing the bias directly but professionally is effective."',
		'next',
		'alex "You might say: \'I appreciate that you find me articulate, but that comment suggests certain assumptions about people from my neighborhood. Perhaps we could discuss why you have those expectations?\'"',
		'next',
		'alex "This response opens a dialogue while maintaining professionalism."',
		'jump Next_Choice'
	],

	'Verbal_Bad': [
		'show character alex default at center with fadeIn',
		'alex "While accepting it as a compliment might seem polite, {{player.name}}, it reinforces harmful stereotypes."',
		'next',
		'alex "Let\'s try a more constructive approach."',
		'jump Verbal_Good'
	],

	'Verbal_Neutral': [
		'show character alex default at center with fadeIn',
		'alex "Changing the subject might avoid conflict, {{player.name}}, but it doesn\'t address the underlying bias."',
		'next',
		'alex "Let\'s try a more direct approach."',
		'jump Verbal_Good'
	],

	'Behavioral': [
		'show scene breakroom with fadeIn',
		'show character coworker default at center with fadeIn',
		'coworker "Oh, let me show you how to use the coffee machine. I know technology can be tricky for older employees."',
		'next',
		'show character alex default at center with fadeIn',
		'alex "This is a behavioral microaggression based on age stereotypes."',
		'next',
		{
			'Choice': {
				'Challenge the assumption professionally': {
					'Text': 'Challenge the assumption professionally',
					'Do': 'jump Behavioral_Good'
				},
				'React defensively': {
					'Text': 'React defensively',
					'Do': 'jump Behavioral_Bad'
				},
				'Silently comply': {
					'Text': 'Silently comply',
					'Do': 'jump Behavioral_Neutral'
				}
			}
		}
	],

	'Behavioral_Good': [
		'show character alex default at center with fadeIn',
		'alex "Great response, {{player.name}}! Challenging assumptions professionally helps educate others."',
		'next',
		'alex "You could say: \'I appreciate your offer to help, but I\'m quite comfortable with technology. Age doesn\'t determine technical ability.\'"',
		'next',
		'alex "This response addresses the stereotype while maintaining a professional tone."',
		'jump Next_Choice'
	],

	'Behavioral_Bad': [
		'show character alex default at center with fadeIn',
		'alex "While it\'s natural to feel defensive, {{player.name}}, reacting with anger might escalate the situation."',
		'next',
		'alex "Let\'s try a more constructive approach."',
		'jump Behavioral_Good'
	],

	'Behavioral_Neutral': [
		'show character alex default at center with fadeIn',
		'alex "Silently complying might seem easier, {{player.name}}, but it allows the stereotype to persist."',
		'next',
		'alex "Let\'s try a more assertive approach."',
		'jump Behavioral_Good'
	],

	'Institutional': [
		'show scene office with fadeIn',
		'show character manager default at center with fadeIn',
		'manager "The dress code requires \'professional hair styles\' but doesn\'t specify what that means. Some employees feel it unfairly targets their natural hair."',
		'next',
		'show character alex default at center with fadeIn',
		'alex "This is an institutional microaggression embedded in policy."',
		'next',
		{
			'Choice': {
				'Propose policy revision': {
					'Text': 'Propose policy revision',
					'Do': 'jump Institutional_Good'
				},
				'Defend existing policy': {
					'Text': 'Defend existing policy',
					'Do': 'jump Institutional_Bad'
				},
				'Remain neutral': {
					'Text': 'Remain neutral',
					'Do': 'jump Institutional_Neutral'
				}
			}
		}
	],

	'Institutional_Good': [
		'show character alex default at center with fadeIn',
		'alex "Excellent approach, {{player.name}}! Addressing institutional microaggressions requires systemic change."',
		'next',
		'alex "You might suggest: \'Let\'s review and update the policy to be more inclusive and specific about what constitutes professional attire, ensuring it respects all cultural expressions.\'"',
		'next',
		'alex "This response addresses the root cause and promotes inclusive change."',
		'jump Next_Choice'
	],

	'Institutional_Bad': [
		'show character alex default at center with fadeIn',
		'alex "While defending existing policy might seem loyal, {{player.name}}, it can perpetuate exclusionary practices."',
		'next',
		'alex "Let\'s try a more inclusive approach."',
		'jump Institutional_Good'
	],

	'Institutional_Neutral': [
		'show character alex default at center with fadeIn',
		'alex "Remaining neutral might seem safe, {{player.name}}, but it doesn\'t address the systemic issue."',
		'next',
		'alex "Let\'s try a more proactive approach."',
		'jump Institutional_Good'
	],

	'Next_Choice': [
		'show scene office with fadeIn',
		'show character alex default at center with fadeIn',
		'alex "Would you like to explore another type of microaggression or review what we\'ve learned?"',
		'next',
		{
			'Choice': {
				'Environmental Microaggression': {
					'Text': 'Environmental Microaggression',
					'Do': 'jump Environmental'
				},
				'Verbal Microaggression': {
					'Text': 'Verbal Microaggression',
					'Do': 'jump Verbal'
				},
				'Behavioral Microaggression': {
					'Text': 'Behavioral Microaggression',
					'Do': 'jump Behavioral'
				},
				'Institutional Microaggression': {
					'Text': 'Institutional Microaggression',
					'Do': 'jump Institutional'
				},
				'Review Learning': {
					'Text': 'Review Learning',
					'Do': 'jump Conclusion'
				}
			}
		}
	],

	'Conclusion': [
		'show scene office with fadeIn',
		'show character alex default at center with fadeIn',
		'alex "Great work today, {{player.name}}! You\'ve learned about different types of microaggressions and how to address them constructively."',
		'next',
		'alex "Remember these key points:"',
		'next',
		'alex "1. Microaggressions can be environmental, verbal, behavioral, or institutional."',
		'next',
		'alex "2. Professional, educational responses are most effective."',
		'next',
		'alex "3. Change requires both individual and systemic action."',
		'next',
		'alex "Would you like to continue learning?"',
		'next',
		{
			'Choice': {
				'Try Another Scenario': {
					'Text': 'Try Another Scenario',
					'Do': 'jump Next_Choice'
				},
				'End Session': {
					'Text': 'End Session',
					'Do': 'jump End'
				}
			}
		}
	],

	'End': [
		'show scene office with fadeIn',
		'show character alex default at center with fadeIn',
		'alex "Thank you for participating in this learning experience, {{player.name}}. Remember, addressing microaggressions is an ongoing process."',
		'next',
		'alex "Keep practicing these skills in your daily life to create more inclusive environments."',
		'end'
	]
});