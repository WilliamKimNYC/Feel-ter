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
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
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

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'office': 'office.jpg',
	'classroom': 'classroom.jpg'
});


// Define the Characters
monogatari.characters ({
	'alex': {
		name: 'Alex',
		color: '#3498db',
		directory: 'alex',
		default: 'default'
	},
	'professor': {
		name: 'Professor',
		color: '#2c3e50',
		directory: 'professor',
		default: 'default'
	},
	'coworker': {
		name: 'Coworker',
		color: '#e74c3c',
		directory: 'coworker',
		default: 'default'
	},
	'student': {
		name: 'Student',
		color: '#27ae60',
		directory: 'student',
		default: 'default'
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene office with fadeIn',
		'show character alex',
		'alex "Welcome to Understanding Microaggressions. I\'m Alex, and I\'ll be your guide through this interactive learning experience."',
		'alex "Today, we\'ll explore different scenarios where microaggressions might occur and learn how to handle them appropriately."',
		'alex "Let\'s start with a common workplace scenario. How would you respond?"',
		{
			'Choice': {
				'Start Scenario 1': 'Scenario1',
				'Learn More About Microaggressions': 'LearnMore',
				'Skip to Different Scenario': 'Scenario2'
			}
		}
	],

	'LearnMore': [
		'show scene classroom with fadeIn',
		'show character professor',
		'professor "Microaggressions are subtle, often unintentional expressions of bias or prejudice."',
		'professor "They can be verbal, behavioral, or environmental slights that communicate hostile, derogatory, or negative messages."',
		'professor "Let\'s look at some examples and learn how to address them."',
		'jump Scenario1'
	],

	'Scenario1': [
		'show scene office with fadeIn',
		'show character coworker',
		'coworker "Wow, your English is so good! Where are you really from?"',
		'alex "This is a common microaggression. How would you respond?"',
		{
			'Choice': {
				'Educate them calmly': 'Response1A',
				'Ignore the comment': 'Response1B',
				'Respond with frustration': 'Response1C'
			}
		}
	],

	'Response1A': [
		'show character alex',
		'alex "That\'s a good approach. You could say: \'I was born here, but I understand you\'re curious. Instead of asking where someone is \'really\' from, you could ask about their cultural background or heritage.\'"',
		'alex "This response educates while maintaining a constructive dialogue."',
		'jump Scenario2'
	],

	'Response1B': [
		'show character alex',
		'alex "While ignoring can be a coping mechanism, it doesn\'t address the underlying issue or help prevent future microaggressions."',
		'alex "Let\'s try a more constructive approach."',
		'jump Response1A'
	],

	'Response1C': [
		'show character alex',
		'alex "While your feelings are valid, responding with frustration might escalate the situation and make it harder to have a productive conversation."',
		'alex "Let\'s try a more constructive approach."',
		'jump Response1A'
	],

	'Scenario2': [
		'show scene classroom with fadeIn',
		'show character student',
		'student "You\'re so articulate for someone from your background!"',
		'alex "This is another common microaggression. How would you handle this situation?"',
		{
			'Choice': {
				'Address the underlying assumption': 'Response2A',
				'Thank them awkwardly': 'Response2B',
				'Challenge them directly': 'Response2C'
			}
		}
	],

	'Response2A': [
		'show character alex',
		'alex "Good choice! You could say: \'I appreciate you trying to give a compliment, but it suggests you had lower expectations based on my background. Instead, you could simply say you enjoyed my presentation.\'"',
		'alex "This response addresses the microaggression while maintaining a constructive dialogue."',
		'jump Conclusion'
	],

	'Response2B': [
		'show character alex',
		'alex "While being polite is important, not addressing the microaggression can reinforce harmful stereotypes."',
		'alex "Let\'s try a more constructive approach."',
		'jump Response2A'
	],

	'Response2C': [
		'show character alex',
		'alex "While it\'s important to stand up for yourself, an aggressive response might make it harder to have a productive conversation."',
		'alex "Let\'s try a more constructive approach."',
		'jump Response2A'
	],

	'Conclusion': [
		'show scene office with fadeIn',
		'show character alex',
		'alex "Great job! You\'ve learned about different types of microaggressions and how to respond to them constructively."',
		'alex "Remember, addressing microaggressions is about education and growth, not blame or shame."',
		'alex "Would you like to try another scenario or learn more about specific types of microaggressions?"',
		{
			'Choice': {
				'Try Another Scenario': 'Scenario1',
				'Learn More': 'LearnMore',
				'End Session': 'End'
			}
		}
	],

	'End': [
		'show scene office with fadeIn',
		'show character alex',
		'alex "Thank you for participating in this learning experience. Remember, understanding and addressing microaggressions is an ongoing process."',
		'alex "Keep practicing these skills in your daily life to create more inclusive environments."',
		'end'
	]
});