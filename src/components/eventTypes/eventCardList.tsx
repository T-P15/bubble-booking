import { Event } from "~/utils/types/event.types";

import { Stack } from "@mui/material";

import EventCard from "./eventCard";

export type EventCardListProps = {
  eventList: Event[];
};

export default function EventCardList({ eventList }: EventCardListProps) {
  return (
    <Stack direction="column" spacing={2}>
      {eventList.map((event) => (
        <EventCard key={event.title} event={event} />
      ))}
    </Stack>
  );
}
