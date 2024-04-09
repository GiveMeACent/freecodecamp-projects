import { useState } from "react";

const QuotesRandomizer = (props) => {
  const [quote, setQuote] = useState(props.initialQuote || "");
  const handleClickGenerateQuote = () => {
    setQuote();
  };
};
