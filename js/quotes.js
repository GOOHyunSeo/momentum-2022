const quotes = [
  {
    quote: "Hey Patrick, I thought of something funnier than 24… 25!",
    character: "~Spongebob",
  },
  {
    quote: "A 5 letter word for happiness – MONEY.",
    character: "~Mr. Krabs",
  },
  {
    quote: "It all started when I was born.",
    character: "~Spongebob",
  },
  {
    quote:
      "If you believe in yourself, with a tiny pinch of magic all your dreams can come true!",
    character: "~Spongebob",
  },
];

const quote = document.querySelector("#quote span:first-child");
const character = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * 4)];

quote.innerText = todaysQuote.quote;
character.innerText = todaysQuote.character;
