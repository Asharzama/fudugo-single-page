import React from "react";
import { EventContainer, Grid, Item, Flex } from "../styles/Events.css";

const Events = () => {
  return (
    <EventContainer>
      <h1>Events</h1>
      <Flex>
        <h2> &#10094;</h2>
        <Grid>
          <Item background="./images/event-1.png" />
          <Item background="./images/event-2.png" />
          <Item background="./images/event-3.png" />
          <Item background="./images/event-4.png" />
        </Grid>
        <h2> &#10095;</h2>
      </Flex>
    </EventContainer>
  );
};

export default Events;
