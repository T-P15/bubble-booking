import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  SyntheticEvent,
  useCallback,
  useMemo,
} from "react";
import { DatePickerEventFormData, Todo } from "~/utils/types/calendar.types";

import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

interface AddDatePickerEventModalProps {
  open: boolean;
  handleClose: Dispatch<SetStateAction<void>>;
  datePickerEventFormData: DatePickerEventFormData;
  setDatePickerEventFormData: Dispatch<SetStateAction<DatePickerEventFormData>>;
  onAddEvent: (e: MouseEvent<HTMLButtonElement>) => void;
  todos: Todo[];
}

export default function AddDatePickerEventModal({
  open,
  handleClose,
  datePickerEventFormData,
  setDatePickerEventFormData,
  onAddEvent,
  todos,
}: AddDatePickerEventModalProps) {
  const { description, start, end, allDay } = datePickerEventFormData;

  const onClose = useCallback(() => {
    handleClose();
  }, []);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setDatePickerEventFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleCheckboxChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const updatedAllDay = event.target.checked;

      setDatePickerEventFormData((prevState) => ({
        ...prevState,
        allDay: updatedAllDay,
      }));
    },
    [],
  );

  const handleTodoChange = useCallback(
    (_: SyntheticEvent, todo: Todo | null) => {
      setDatePickerEventFormData((prevState) => ({
        ...prevState,
        todoId: todo?.id,
      }));
    },
    [],
  );

  const isDisabled = useMemo(() => {
    const isCheckend = !allDay && end === null;
    const isEmptyDescription = description === "";
    const isStartNull = start === null;

    return isCheckend || isEmptyDescription || isStartNull;
  }, []);

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
            value={description}
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            onChange={onChange}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box mb={2} mt={5}>
              <DateTimePicker
                label="Start date"
                value={start}
                ampm={true}
                minutesStep={30}
                onChange={(newValue) =>
                  setDatePickerEventFormData((prevState) => ({
                    ...prevState,
                    start: new Date(newValue!),
                  }))
                }
              />
            </Box>

            <Box>
              <Typography variant="caption" color="text" component={"span"}>
                All day?
              </Typography>
              <Checkbox onChange={handleCheckboxChange} value={allDay} />
            </Box>
            <DateTimePicker
              label="End date"
              disabled={allDay}
              minDate={start}
              minutesStep={30}
              ampm={true}
              value={allDay ? null : end}
              onChange={(newValue) =>
                setDatePickerEventFormData((prevState) => ({
                  ...prevState,
                  end: new Date(newValue!),
                }))
              }
            />
          </LocalizationProvider>
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
        <Button color="success" onClick={onAddEvent}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
