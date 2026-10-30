// quotes.js — puts one random quote into the hero
const allQuotes = document.querySelectorAll('.quote');
const heroText = document.getElementById('hero-text');
const heroSource = document.getElementById('hero-source');

function showRandomQuote() {
  // pick one of the twenty articles already on the page
  const pick = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  heroText.innerHTML = pick.querySelector('blockquote').innerHTML;
  heroSource.innerHTML = pick.querySelector('footer').innerHTML;
}

document.getElementById('another-quote').addEventListener('click', showRandomQuote);

// one quote in the hero before anything is clicked
showRandomQuote();
