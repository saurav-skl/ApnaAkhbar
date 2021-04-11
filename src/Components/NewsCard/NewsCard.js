import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid white",
  },
  news: {
    display: "flex",
    flexDirection: "row",
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      flexDirection: "column", // eslint-disable-line no-useless-computed-key
    },
  },
  media: {
    height: 250,
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});

const NewsCard = ({ newsItem, idx }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea
          href={newsItem.url}
          target="_blank"
          className={classes.news}
        >
          <CardMedia
            className={classes.media}
            image={
              newsItem.urlToImage
                ? newsItem.urlToImage
                : "https://i2.wp.com/www.indiafellow.org/blog/wp-content/uploads/2020/05/Marketplace-Lending-News.jpg?resize=750%2C410&ssl=1"
            }
            title={newsItem.title}
          />
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">
              {new Date(newsItem.publishedAt).toDateString()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h2">
              {newsItem.source.name}
            </Typography>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {newsItem.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {newsItem.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" href={newsItem.url}>
            Learn More
          </Button>
          <Typography variant="h5" color="textSecondary" component="h2">
            {idx + 1}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default NewsCard;
