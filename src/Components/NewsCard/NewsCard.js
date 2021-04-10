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
  },
  news: {
    display: "flex",
    flexDirection: "row",
    ["@media (max-width:780px)"]: {
      flexDirection: "column", // eslint-disable-line no-useless-computed-key
    },
  },
  media: {
    height: 140,
    width: 400,
  },
});

const NewsCard = ({ newsItem }) => {
  const classes = useStyles();
  return (
    <div>
      {console.log("card=> ", newsItem)}
      <Card className={classes.root}>
        <CardActionArea className={classes.news}>
          <CardMedia
            className={classes.media}
            image={
              newsItem.urlToImage
                ? newsItem.urlToImage
                : "https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bnVsbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h4">
              {newsItem.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {newsItem.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default NewsCard;
