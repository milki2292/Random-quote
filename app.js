const quoteDiv = document.querySelector(".quote");
const quoteSrc = document.querySelector(".source");
const quoteBtn = document.querySelector(".quoteBtn");


var quotes = [
  { quote: "Just keep swimming", movie: "Finding Nemo" },
  { quote: "My precious.", movie: "The Lord of the Rings: Two Towers" },
  { quote: "Forget it, Jake, it's Chinatown.", movie: "Chinatown" },
  { quote: "I'm king of the world!", movie: "Titanic" }, 
];

quoteBtn.addEventListener('click', generateQuote);

function generateQuote(){
    let num = Math.floor(Math.random() * quotes.length);
    quoteDiv.innerText = '"' + quotes[num].quote +'"';
    quoteSrc.innerText = quotes[num].movie;
}


