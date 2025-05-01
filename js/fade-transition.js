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
