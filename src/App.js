import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewsContent from "./Components/NewsContent/NewsContent";
import axios from "axios";
import apikey from "./config";

import wordsToNumbers from "words-to-numbers";
import alanBtn from "@alan-ai/alan-sdk-web";

const App = () => {
  const [category, setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResult, setnewsResult] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const key = "";

  // const newsApi = async () => {
  //   try {
  //     const news = await axios.get(
  //       `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${category}`
  //     );
  //     setnewsArray(news.data.articles);
  //     setnewsResult(news.data.totalResults);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  useEffect(() => {
    alanBtn({
      key:
        "dea939e17448a235251b5f4cba5344682e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setnewsArray(articles);
        } else if (command === "instructions") {
          setIsOpen(true);
        } else if (command === "highlight") {
        } else if (command === "open") {
          const parsenumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;

          const article = articles[parsenumber - 1];

          if (parsenumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <NewsContent setnewsArray={setnewsArray} newsArray={newsArray} />
    </div>
  );
};

export default App;
