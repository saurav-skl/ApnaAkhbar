import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewsContent from "./Components/NewsContent/NewsContent";
import axios from "axios";
import apikey from "./config"

const App = () => {
  const [category, setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResult, setnewsResult] = useState();

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${category}`
      );
      setnewsArray(news.data.articles);
      setnewsResult(news.data.totalResults);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(newsArray);

  useEffect(() => {
    newsApi();
  }, [newsResult]);

  return (
    <div className="App">
      <Navbar />
      <NewsContent setnewsArray={setnewsArray} newsArray={newsArray} />
    </div>
  );
};

export default App;
