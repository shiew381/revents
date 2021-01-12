import React from "react";
import EventListItem from "./EventListItem.jsx";

function EventList({ events }) {
  return (
    <>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} />
      ))}
    </>
  );
}

export default EventList;
