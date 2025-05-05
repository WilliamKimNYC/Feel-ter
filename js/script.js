/* global monogatari */

// Define the messages used in the game.
monogatari.action("message").messages({
  Help: {
    title: "Help",
    subtitle: "Some useful Links",
    body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
  },
});

// Define the notifications used in the game
monogatari.action("notification").notifications({
  Welcome: {
    title: "Welcome to Understanding Microaggressions",
    body: "An interactive learning experience about recognizing and addressing microaggressions",
    icon: "",
  },
});

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({});

// Define the canvas objects used in the game
monogatari.action("canvas").objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {});

// Define the music used in the game.
monogatari.assets("music", {
  main_theme: "main_theme.mp3",
  study_room: "quiz_theme.mp3",
  cafe: "quiz_theme.mp3",
  classroom: "quiz_theme.mp3",
  ending: "ending_theme.mp3",
});

// Define the voice files used in the game.
monogatari.assets("voices", {
  alex: "alex-voice.mp3",
  others: "others-voice.mp3",
  player: "player-voice.mp3",
});

// Define the sounds used in the game.
monogatari.assets("sounds", {});

// Define the videos used in the game.
monogatari.assets("videos", {});

// Define the images used in the game.
monogatari.assets("images", {
  "characters/alex/default.png": "characters/alex/default.png",
  "characters/classmate/default.png": "characters/classmate/default.png",
  "characters/manager/default.png": "characters/manager/default.png",
});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {
  "main-menu": "main-menu-bg.jpg",
  study_room: "study-room.jpg",
  cafe: "cafe.jpg",
  classroom: "classroom.jpg",
  ending: "ending.jpg",
});

// Define the Characters
monogatari.characters({
  alex: {
    name: "Alex",
    color: "#3498db",
    directory: "alex",
    sprites: {
      default: "neutral.png",
      greet: "greet.png",
      explaining: "explaining.png",
      concerned: "concerned.png",
      happy: "happy.png",
    },
  },
  classmate: {
    name: "Classmate",
    color: "#2c3e50",
    directory: "classmate",
    sprites: {
      default: "default.png",
    },
  },
  manager: {
    name: "Manager",
    color: "#e74c3c",
    directory: "manager",
    sprites: {
      default: "default.png",
    },
  },
});

monogatari.script({
  // The game starts here.
  Start: [
    "show scene main-menu with fadeIn",
    "play music main_theme with loop fade 2",
    "show notification Welcome",
    {
      Input: {
        Text: "Before we begin, what is your name?",
        Validation: function (input) {
          return input.trim().length > 0;
        },
        Save: function (input) {
          monogatari.storage({
            player: {
              name: input,
            },
          });
          return true;
        },
        Revert: function () {
          monogatari.storage({
            player: {
              name: "",
            },
          });
        },
        Warning: "Please enter your name to continue.",
      },
    },
    "jump Intro",
  ],

  Intro: [
    "play music main_theme with loop fade 2",
    "show character alex greet at center with fadeIn",
    "play voice alex",
    "alex Welcome {{player.name}}! I'm Alex, and I'll be your guide through this interactive learning experience about microaggressions.",
    "next",
    "show character alex explaining at center with fadeIn",
    "play voice alex",
    "alex There are three main types I want you to know about:",
    "next",
    "play voice alex",
    "alex Microaggressions are small comments or actions that can feel dismissive or hurtful.",
    "next",
    "play voice alex",
    "alex Microassaults are more direct, and usually intentional.",
    "next",
    "play voice alex",
    "alex Microinsults are sneaky insults hiding inside what sounds like praise.",
    "next",
    "show character alex default at center with fadeIn",
    "play voice alex",
    "alex Let's dive in and see what they look like.",
    "jump Chapter1",
  ],

  Chapter1: [
    "stop music with fade 1",
    "show scene study_room with fadeIn",
    "play music study_room with loop fade 2",
    "show character alex default at center with fadeIn",
    "next",
    "hide character alex",
    "show character classmate default at center with fadeIn",
    "play voice others",
    'classmate "Wow, your English is so good! Where are you really from?"',
    "next",
    '[Internal thought]: "I\'ve spoken English my whole life... Why do people always ask me that?"',
    "next",
    {
      Choice: {
        "Smile awkwardly": {
          Text: "Smile awkwardly and change the topic",
          Do: "jump Chapter1_Feedback1",
        },
        "Say from here": {
          Text: 'Say, "I\'m from here. Why do you ask?"',
          Do: "jump Chapter1_Feedback2",
        },
        "Laugh about Mars": {
          Text: 'Laugh and say, "I\'m from Mars."',
          Do: "jump Chapter1_Feedback3",
        },
      },
    },
  ],

  Chapter1_Feedback1: [
    "play voice player",
    'player "..."',
    "show scene study_room with fadeIn",
    "show character classmate default at center with fadeIn",
    "next",
    "hide character classmate",
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Sometimes we freeze and move on. That\'s totally normal."',
    "next",
    "play voice alex",
    "alex \"But it's also okay to gently call attention to comments that don't sit right with you.\"",
    "next",
    "jump Chapter1_Quiz",
  ],

  Chapter1_Feedback2: [
    "play voice player",
    'player "I\'m from here. Why do you ask?"',
    "show scene study_room with fadeIn",
    "show character classmate default at center with fadeIn",
    "next",
    "hide character classmate",
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Good response!"',
    "next",
    "play voice alex",
    'alex "You\'re making them think about why they felt the need to question your belonging — without starting a fight."',
    "next",
    "jump Chapter1_Quiz",
  ],

  Chapter1_Feedback3: [
    "play voice player",
    'player "I\'m from Mars."',
    "show scene study_room with fadeIn",
    "show character classmate default at center with fadeIn",
    "next",
    "hide character classmate",
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Humor can deflect the awkwardness."',
    "next",
    "play voice alex",
    'alex "But remember, you have every right to ask for respect too."',
    "next",
    "jump Chapter1_Quiz",
  ],

  Chapter1_Quiz: [
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Why is this considered a microaggression?"',
    "next",
    {
      Choice: {
        "Questioned belonging": {
          Text: "It questioned your belonging based on stereotypes",
          Do: "jump Chapter1_Quiz_Correct",
        },
        "Friendly compliment": {
          Text: "It was just a friendly compliment",
          Do: "jump Chapter1_Quiz_Incorrect",
        },
        "Trying to be funny": {
          Text: "They were trying to be funny",
          Do: "jump Chapter1_Quiz_Incorrect",
        },
      },
    },
  ],

  Chapter1_Quiz_Correct: [
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Exactly!"',
    "next",
    "play voice alex",
    "alex \"Even if it sounds polite, it's about suggesting you don't fully belong because of who you are.\"",
    "next",
    "jump Chapter2",
  ],

  Chapter1_Quiz_Incorrect: [
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Almost."',
    "next",
    "play voice alex",
    'alex "Even when words sound friendly or funny, they can still carry hidden assumptions."',
    "next",
    "play voice alex",
    "alex \"The key is: did the comment make you feel 'othered' or different based on your identity?\"",
    "next",
    "jump Chapter2",
  ],

  Chapter2: [
    "stop music with fade 1",
    "show scene cafe with fadeIn",
    "play music cafe with loop fade 2",
    "show character alex default at center with fadeIn",
    "next",
    "hide character alex",
    "show character manager default at center with fadeIn",
    "play voice others",
    'manager "We need someone who fits the vibe here... if you know what I mean."',
    "next",
    "[Internal thought]: \"Feels like they're saying I don't fit in — but they won't say it directly.\"",
    "next",
    {
      Choice: {
        "Ask about vibe": {
          Text: "Ask, \"What do you mean by 'vibe'?\"",
          Do: "jump Chapter2_Feedback1",
        },
        "Stay quiet": {
          Text: "Assume it's about your clothes and stay quiet",
          Do: "jump Chapter2_Feedback2",
        },
        Leave: {
          Text: "Leave without saying anything",
          Do: "jump Chapter2_Feedback3",
        },
      },
    },
  ],

  Chapter2_Feedback1: [
    "play voice player",
    "player \"What do you mean by 'vibe'?\"",
    "show scene cafe with fadeIn",
    "show character manager default at center with fadeIn",
    "next",
    "hide character manager",
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Nice — asking puts the responsibility back on them to explain themselves."',
    "next",
    "jump Chapter2_Quiz",
  ],

  Chapter2_Feedback2: [
    "play voice player",
    'player "..."',
    "show scene cafe with fadeIn",
    "show character manager default at center with fadeIn",
    "next",
    "hide character manager",
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Totally understandable."',
    "next",
    "play voice alex",
    'alex "Sometimes it feels safer to stay quiet."',
    "next",
    "play voice alex",
    'alex "Just remember — it\'s okay to ask for clarification if something feels off."',
    "next",
    "jump Chapter2_Quiz",
  ],

  Chapter2_Feedback3: [
    "play voice player",
    'player "..."',
    "show scene cafe with fadeIn",
    "show character manager default at center with fadeIn",
    "next",
    "hide character manager",
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Walking away protects your peace — but sometimes it also lets bias go unchallenged."',
    "next",
    "play voice alex",
    'alex "Always choose what feels safest for you."',
    "next",
    "jump Chapter2_Quiz",
  ],

  Chapter2_Quiz: [
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "What makes this situation a microassault?"',
    "next",
    {
      Choice: {
        "Direct and intentional": {
          Text: "It was more direct and intentional",
          Do: "jump Chapter2_Quiz_Correct",
        },
        Misunderstanding: {
          Text: "It was just a misunderstanding",
          Do: "jump Chapter2_Quiz_Incorrect",
        },
        "Being funny": {
          Text: "They were trying to be funny",
          Do: "jump Chapter2_Quiz_Incorrect",
        },
      },
    },
  ],

  Chapter2_Quiz_Correct: [
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Exactly!"',
    "next",
    "play voice alex",
    'alex "Microassaults are usually subtle, but there\'s more purpose and bias behind them."',
    "next",
    "jump Chapter3",
  ],

  Chapter2_Quiz_Incorrect: [
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Not quite."',
    "next",
    "play voice alex",
    'alex "Microassaults aren\'t accidents — they usually carry some intent, even if the person hides it under vague words."',
    "next",
    "jump Chapter3",
  ],

  Chapter3: [
    "stop music with fade 1",
    "show scene classroom with fadeIn",
    "play music classroom with loop fade 2",
    "show character alex default at center with fadeIn",
    "next",
    "hide character alex",
    "show character classmate default at center with fadeIn",
    "play voice others",
    'classmate "Wow, I didn\'t expect you to be this good!"',
    "next",
    '[Internal thought]: "Wait... why wouldn\'t you expect that?"',
    "next",
    {
      Choice: {
        "Say thanks": {
          Text: "Say thanks and move on",
          Do: "jump Chapter3_Feedback1",
        },
        "Ask why": {
          Text: 'Ask, "Why wouldn\'t you expect that?"',
          Do: "jump Chapter3_Feedback2",
        },
        "Laugh it off": {
          Text: "Laugh it off and change the subject",
          Do: "jump Chapter3_Feedback3",
        },
      },
    },
  ],

  Chapter3_Feedback1: [
    "play voice player",
    'player "Thanks..."',
    "show scene classroom with fadeIn",
    "show character classmate default at center with fadeIn",
    "next",
    "hide character classmate",
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "It\'s okay to move on."',
    "next",
    "play voice alex",
    'alex "But if it leaves a weird feeling, trust yourself — you\'re picking up on something real."',
    "next",
    "jump Chapter3_Quiz",
  ],

  Chapter3_Feedback2: [
    "play voice player",
    'player "Why wouldn\'t you expect that?"',
    "show scene classroom with fadeIn",
    "show character classmate default at center with fadeIn",
    "next",
    "hide character classmate",
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Perfect — you\'re inviting them to reflect without being hostile."',
    "next",
    "play voice alex",
    'alex "Sometimes that\'s all it takes to plant a seed of awareness."',
    "next",
    "jump Chapter3_Quiz",
  ],

  Chapter3_Feedback3: [
    "play voice player",
    'player "Haha, yeah..."',
    "show scene classroom with fadeIn",
    "show character classmate default at center with fadeIn",
    "next",
    "hide character classmate",
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Humor can soften awkward moments."',
    "next",
    "play voice alex",
    "alex \"But remember, you don't have to pretend comments like that are harmless if they don't feel good.\"",
    "next",
    "jump Chapter3_Quiz",
  ],

  Chapter3_Quiz: [
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "What makes this a microinsult?"',
    "next",
    {
      Choice: {
        "Hidden insult": {
          Text: "It's a hidden insult inside a compliment",
          Do: "jump Chapter3_Quiz_Correct",
        },
        "Bad wording": {
          Text: "It was just bad wording",
          Do: "jump Chapter3_Quiz_Incorrect",
        },
        Compliment: {
          Text: "It was totally a compliment",
          Do: "jump Chapter3_Quiz_Incorrect",
        },
      },
    },
  ],

  Chapter3_Quiz_Correct: [
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Exactly!"',
    "next",
    "play voice alex",
    'alex "It sounds like praise, but it actually reinforces a stereotype."',
    "next",
    "jump Ending",
  ],

  Chapter3_Quiz_Incorrect: [
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "Close, but not quite."',
    "next",
    "play voice alex",
    "alex \"Even when the words sound nice, if they carry surprise or low expectations about someone's identity — it's a microinsult.\"",
    "next",
    "jump Ending",
  ],

  Ending: [
    "stop music with fade 1",
    "show scene ending with fadeIn",
    "play music ending with loop fade 2",
    "show character alex default at center with fadeIn",
    "play voice alex",
    'alex "You made it through!"',
    "next",
    "play voice alex",
    'alex "Today you learned how to spot microaggressions, microassaults, and microinsults — and why they matter."',
    "next",
    "play voice alex",
    'alex "Even small words can carry big messages."',
    "next",
    "play voice alex",
    "alex \"It's okay to notice them. It's okay to respond.\"",
    "next",
    "play voice alex",
    'alex "You deserve to be seen, heard, and respected — always."',
    "next",
    "Thank you for playing!",
    "end",
  ],
});
