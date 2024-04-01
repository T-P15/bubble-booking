import Header from "~/components/dashboard/Header";
import EventCardList from "~/components/eventTypes/eventCardList";
import { Event } from "~/utils/types/event.types";

import { Button } from "@mui/material";

const DEMO_EVENT_LIST: Event[] = [
  {
    title: "Event 1",
    isEnabled: true,
    subtitle: "Lorem ipsum dolor sit amet",
    duration: 60,
    url: "https://example.com/event1",
  },
  {
    title: "Event 2",
    isEnabled: false,
    subtitle: "Consectetur adipiscing elit",
    duration: 90,
    url: "https://example.com/event2",
  },
  {
    title: "Event 3",
    isEnabled: true,
    subtitle: "Sed do eiusmod tempor incididunt",
    duration: 120,
    url: "https://example.com/event3",
  },
  {
    title: "Event 4",
    isEnabled: true,
    subtitle: "Ut labore et dolore magna aliqua",
    duration: 45,
    url: "https://example.com/event4",
  },
  {
    title: "Event 5",
    isEnabled: true,
    subtitle: "Ut enim ad minim veniam",
    duration: 75,
    url: "https://example.com/event5",
  },
];

export default function EventTypes() {
  return (
    <>
      <Header
        title="Event Types"
        subtitle="Create events to share for people to book on your calendar"
        actionBar={
          <Button variant="outlined" color="info">
            New
          </Button>
        }
      />
      <div>
        <EventCardList eventList={DEMO_EVENT_LIST} />
      </div>
    </>
  );
}
