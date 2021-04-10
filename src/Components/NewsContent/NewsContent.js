import React from "react";
import { Container } from "@material-ui/core";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ setnewsArray,newsArray }) => {
  return (
    <div>
      <Container maxWidth="md" border={2}>
      {/* {console.log(newsArray)} */}
        {newsArray.map((newsItem) => {
          return <NewsCard newsItem={newsItem} />;
        })}
      </Container>
    </div>
  );
};

export default NewsContent;
