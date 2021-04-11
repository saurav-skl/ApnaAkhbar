import React from "react";
import { Grow, Grid } from "@material-ui/core";
import NewsCard from "../NewsCard/NewsCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid white",
  },
});

const NewsContent = ({ setnewsArray, newsArray }) => {
  const classes = useStyles();
  return (
    <div>
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {newsArray.map((newsItem, idx) => {
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              return <NewsCard newsItem={newsItem} idx={idx} />;
            </Grid>;
          })}
          ;
        </Grid>
      </Grow>
    </div>
  );
};

export default NewsContent;
