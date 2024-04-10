import { useEffect, useState } from "react";
import Axios from "axios";

const QuoteMachine = (props) => {
  const [quotes, setQuotes] = useState(null);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    (async () => {
      const tmp = (
        await Axios.get(
          "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        )
      ).data.quotes;
      setQuotes(tmp);
    })();
  }, []);

  const generateRandomQuote = () => {
    const randomIndexQuote = Math.round(Math.random() * (quotes.length - 1));
    return quotes[randomIndexQuote];
  };

  const handleClickGenerateQuote = () => {
    if (quotes) setQuote(generateRandomQuote());
  };

  useEffect(() => {
    handleClickGenerateQuote();
  }, [quotes]);

  return (
    <>
      <div id="quote-box">
        {quotes ? (
          <>
            <h1 id="text">{quote.quote}</h1>
            <h1 id="author">{quote.author}</h1>
            <button
              id="new-quote"
              onClick={() => {
                handleClickGenerateQuote();
              }}
            ></button>
            <a
              href="https://twitter.com/intent/tweet"
              target="_blank"
              id="tweet-quote"
            >
              Sample link
            </a>
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </>
  );
};

export default QuoteMachine;
