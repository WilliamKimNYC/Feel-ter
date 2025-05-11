"use strict";
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// Add browser detection
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

// Browser-specific fixes
if (isSafari || isFirefox) {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  });
}

// 1. Outside the $_ready function:

// Store the target chapter to jump to after name input
let targetChapter = null;

$_ready(() => {
  // 2. Inside the $_ready function:

  monogatari.init("#monogatari").then(() => {


	// add the 'Select the best option' above choices
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const container = document.querySelector(
          '[data-component="choice-container"]'
        );
        if (container && !container.querySelector(".choice-title")) {
          const prompt = document.createElement("div");
          prompt.className = "choice-title";
          prompt.innerText = "Select the best option:";
          container.insertBefore(prompt, container.firstChild);
        }
      });
    });
    const gameScreen = document.querySelector('[data-screen="game"]');
    if (gameScreen) {
      observer.observe(gameScreen, {
        childList: true,
        subtree: true,
      });
    }

    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const chapter = params.get("chapter");

    // If a chapter is specified, store it for later use
    if (chapter) {
      targetChapter = chapter;

      // Modify the existing Start scene to jump to the target chapter after name input
      monogatari.script({
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

                // After saving the name, jump to the target chapter
                if (targetChapter === "quiz") {
                  monogatari.run("jump Dynamic_Quiz_1");
                } else if (targetChapter === "Chapter1") {
                  monogatari.run("jump Chapter1");
                } else if (targetChapter === "Chapter2") {
                  monogatari.run("jump Chapter2");
                } else if (targetChapter === "Chapter3") {
                  monogatari.run("jump Chapter3");
                } else {
                  // If no specific chapter is targeted, continue with the normal flow
                  monogatari.run("jump Intro");
                }

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
        ],
      });
    }
  });
});
