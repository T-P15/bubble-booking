import { EventInfo } from '~/utils/types/calendar.types';

import { Typography } from '@mui/material';

interface EventSummaryProps {
  event: EventInfo;
}

export default function EventSummary({ event }: EventSummaryProps) {
  return <Typography>{event.description}</Typography>;
}
