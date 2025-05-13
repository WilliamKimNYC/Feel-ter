$(document).ready(function () {
  $(".cta-button").click(function (e) {
    e.preventDefault();
    const link = $(this).attr("href");

    $("#page-wrapper").addClass("fade-out");

    setTimeout(function () {
      window.location.href = link;
    }, 500); // Match this to the CSS transition duration
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const fadeTexts = document.querySelectorAll('.fade-text');
    let currentIndex = 0;
    
    // Set initial state
    fadeTexts.forEach((text, index) => {
        if (index === 0) {
            text.classList.add('active');
        } else {
            text.classList.remove('active');
        }
    });

    function fadeInOut() {
        // Fade out current text
        fadeTexts[currentIndex].classList.remove('active');
        
        // Move to next text
        currentIndex = (currentIndex + 1) % fadeTexts.length;
        
        // Wait for fade out to complete before fading in next text
        setTimeout(() => {
            // Fade in next text
            fadeTexts[currentIndex].classList.add('active');
        }, 1500); // This should match the CSS transition duration for opacity
    }

    // Start the animation cycle every 5 seconds
    setInterval(fadeInOut, 5000); // 5 seconds between transitions
});
