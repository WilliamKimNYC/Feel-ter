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

    function updateFadeText() {
        // Remove active class from all texts
        fadeTexts.forEach(text => text.classList.remove('active'));
        
        // Wait for fade out
        setTimeout(() => {
            // Add active class to current text
            fadeTexts[currentIndex].classList.add('active');
            
            // Move to next text
            currentIndex = (currentIndex + 1) % fadeTexts.length;
        }, 1500); // Wait for fade out to complete
    }

    // Initial display
    updateFadeText();

    // Update every 5 seconds (0 seconds visible + 3 seconds for transitions)
    setInterval(updateFadeText, 3200);
});
