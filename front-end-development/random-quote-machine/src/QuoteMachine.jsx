import { useEffect, useState } from "react";
import Axios from "axios";
import "./QuoteMachine.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const QuoteMachine = (props) => {
  const [quotes, setQuotes] = useState(null);
  const [quote, setQuote] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const colors = [
    "#ff0e19",
    "#ff9000",
    "#ffcb00",
    "#00de51",
    "#19c9ff",
    "#0078ff",
    "#5b51de",
    "#ff004f",
  ];

  useEffect(() => {
    setCurrentColor(generateRandomColor());
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

  const generateRandomColor = () => {
    const randomIndexColor = Math.round(Math.random() * (colors.length - 1));
    return colors[randomIndexColor];
  };

  const handleClickGenerateQuote = () => {
    if (quotes) setQuote(generateRandomQuote());
  };

  useEffect(() => {
    handleClickGenerateQuote();
  }, [quotes]);

  useEffect(() => {
    console.log(document.body);
    document.body.style.background = currentColor;
  }, [currentColor]);

  return (
    <>
      <div id="quote-box" style={{ "--current-color": currentColor }}>
        {quotes ? (
          <>
            <h1 id="text">
              <FontAwesomeIcon className="quotes" icon={faQuoteLeft} />
              {quote.quote}
            </h1>
            <p id="author">- {quote.author}</p>
            <div className="wrapper">
              <div className="socials">
                <a
                  href="https://twitter.com/intent/tweet"
                  target="_blank"
                  id="tweet-quote"
                  className="social-button"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://www.tumblr.com/"
                  target="_blank"
                  id="tumblr-quote"
                  className="social-button"
                >
                  <FontAwesomeIcon icon={faTumblr} />
                </a>
              </div>
              <button
                id="new-quote"
                onClick={() => {
                  handleClickGenerateQuote();
                  setCurrentColor(generateRandomColor());
                }}
              >
                New quote
              </button>
            </div>
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </>
  );
};

export default QuoteMachine;
