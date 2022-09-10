const quotes = [
    {
        quote: "Seeing is believing.",
        author: "Thomas Fuller",
    },
    {
        quote: "A friend is a second myself.",
        author: "Aristotle",
    },
    {
        quote: "I was never less alone than when by myself.",
        author: "Edward Gibbon",
    },
    {
        quote: "When they go low, we go high.",
        author: "Michelle Obama",
    },
    {
        quote: "No pain, no gain.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Don't dream it, be it.",
        author: "Tim Curry",
    },
    {
        quote: "Where there is a will, there is a way.",
        author: "Angela Merkel",
    },
    {
        quote: "You only live once.",
        author: "Drake",
    },
    {
        quote: "Stop, I could have dropped my croissant.",
        author: "Vine",
    },
    {
        quote: "This too shall pass.",
        author: "Abraham Lincoln",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;