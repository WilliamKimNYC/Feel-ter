// Define the main menu
monogatari.component("main-menu").template(() => {
  return `
    <h1>Understanding Microaggressions</h1>
    <ul>
      <li><button data-screen="game">Start</button></li>
      <li><button data-screen="chapter-select">Chapter Select</button></li>
      <li><button data-screen="credits">Credits</button></li>
    </ul>
  `;
});
