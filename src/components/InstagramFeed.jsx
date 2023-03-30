import React from "react";
import {
  FeedContainer,
  Background,
  Grid,
  Item,
} from "../styles/InstagramFeed.css";

const InstagramFeed = () => {
  return (
    <FeedContainer>
      <Background>
        <h1>Instagram Feed</h1>
        <Grid>
          <Item background="./images/feed-1.png" />
          <Item background="./images/feed-2.png" />
          <Item background="./images/feed-3.png" />
          <Item background="./images/feed-4.png" />
          <Item background="./images/feed-5.png" />
          <Item background="./images/feed-6.png" />
        </Grid>
      </Background>
    </FeedContainer>
  );
};

export default InstagramFeed;
