import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ setnewsArray, newsArray }) => {
  return (
    <div>
      <Container maxWidth="md">
        <Grow in>
          <Grid container alignItems="stretch" spacing={3}>
            {newsArray.map((newsItem, idx) => {
              return <NewsCard newsItem={newsItem} idx={idx} />;
            })}
          </Grid>
        </Grow>
      </Container>
    </div>
  );
};

export default NewsContent;
