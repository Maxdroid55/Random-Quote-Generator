const quoteText = document.querySelector("#quote-text");
const author = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#new-quote-btn");



async function displayRandomQuote() {
    const response = await fetch("http://dummyjson.com/quotes");
    const quotes = await response.json();

    const quotesArr = quotes.quotes;
    const randIndex = Math.floor(Math.random() * quotesArr.length)

    quoteText.textContent = `"${quotesArr[randIndex].quote}"`;
    author.textContent = quotesArr[randIndex].author;
}

newQuoteBtn.addEventListener("click", displayRandomQuote);