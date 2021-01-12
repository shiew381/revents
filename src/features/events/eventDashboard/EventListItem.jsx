import React from "react";
import { Item, Segment, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee.jsx";

function EventListItem({ event }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item.Image
            size="tiny"
            circular
            src={event.hostPhotoURL}
          ></Item.Image>
          <Item.Content>
            <Item.Header content={event.title} />
            <Item.Description>Hosted by {event.hostedBy}</Item.Description>
          </Item.Content>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {event.date}
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button color="teal" floated="right" content="View" />
      </Segment>
    </Segment.Group>
  );
}

export default EventListItem;
