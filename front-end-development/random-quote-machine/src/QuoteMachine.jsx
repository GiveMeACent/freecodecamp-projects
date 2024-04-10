import { useEffect, useState } from "react";
import Axios from "axios";

const QuoteMachine = (props) => {
  const [quotes, setQuotes] = useState([]);
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
    setQuote(generateRandomQuote());
  };

  useEffect(() => {
    handleClickGenerateQuote();
  }, [quotes]);

  return <></>;
};

export default QuoteMachine;
