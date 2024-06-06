import {
    ChangeEvent, Dispatch, MouseEvent, SetStateAction, SyntheticEvent, useCallback
} from 'react';
import { EventFormData, Todo } from '~/utils/types/calendar.types';

import {
    Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    TextField
} from '@mui/material';

interface AddEventModalProps {
  open: boolean;
  handleClose: Dispatch<SetStateAction<void>>;
  eventFormData: EventFormData;
  setEventFormData: Dispatch<SetStateAction<EventFormData>>;
  onAddEvent: (e: MouseEvent<HTMLButtonElement>) => void;
  todos: Todo[];
}

export default function AddEventModal({
  open,
  handleClose,
  eventFormData,
  setEventFormData,
  onAddEvent,
  todos,
}: AddEventModalProps) {
  const onClose = useCallback(() => handleClose(), []);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEventFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleTodoChange = useCallback(
    (_: SyntheticEvent, todo: Todo | null) => {
      setEventFormData((prevState) => ({
        ...prevState,
        todoId: todo?.id,
      }));
    },
    [],
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add event</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a event, please fill in the information below.
        </DialogContentText>
        <Box component="form">
          <TextField
            name="description"
            value={eventFormData.description}
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            onChange={onChange}
          />
          <Autocomplete
            onChange={handleTodoChange}
            disablePortal
            id="combo-box-demo"
            options={todos}
            sx={{ marginTop: 4 }}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Todo" />}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={onClose}>
          Cancel
        </Button>
        <Button
          disabled={eventFormData.description === ""}
          color="success"
          onClick={onAddEvent}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
