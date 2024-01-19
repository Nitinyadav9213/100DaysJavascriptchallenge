
      const Quotes = [
        {
          text: "Believe you can and you're halfway there.",
          author: "Theodore Roosevelt",
        },
        {
          text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          author: "Winston S. Churchill",
        },
        {
          text: "Don't watch the clock; do what it does. Keep going.",
          author: " Sam Levenson",
        },
        {
          text: "Your time is limited, don't waste it living someone else's life.",
          author: "Steve Jobs",
        },
        {
          text: "It always seems impossible until its done.",
          author: "Nelson Mandela",
        },
        {
          text: "Success usually comes to those who are too busy to be looking for it.",
          author: " Henry David Thoreau",
        },
      ];

      function getRandomQuote() {
        let random = Math.floor(Math.random() * Quotes.length);
        let randomquotes = Quotes[random];
        generate(randomquotes);
      }

      function generate(Quotes) {
        let quotetext = document.querySelector("#quote-text");
        let author = document.querySelector("#author");

        quotetext.textContent = `${Quotes.text}`;
        author.textContent = `${Quotes.author}`;
      }
      getRandomQuote();
   