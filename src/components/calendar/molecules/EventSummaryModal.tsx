import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { EventInfo } from '~/utils/types/calendar.types';

import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography
} from '@mui/material';

interface EventSummaryModalProps {
  open: boolean;
  handleClose: Dispatch<SetStateAction<void>>;
  onDeleteEvent: (e: MouseEvent<HTMLButtonElement>) => void;
  currentEvent: EventInfo | null;
}

export default function EventSummaryModal({
  open,
  handleClose,
  onDeleteEvent,
  currentEvent,
}: EventSummaryModalProps) {
  const onClose = () => {
    handleClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Event Info</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography
            sx={{ fontSize: 14, marginTop: 3 }}
            color="text.secondary"
            gutterBottom
          >
            {currentEvent?.description}
          </Typography>
        </DialogContentText>
        <Box component="form"></Box>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={onClose}>
          Cancel
        </Button>
        <Button color="info" onClick={onDeleteEvent}>
          Delete Event
        </Button>
      </DialogActions>
    </Dialog>
  );
}
