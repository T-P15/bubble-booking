import 'react-big-calendar/lib/css/react-big-calendar.css';

import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import { MouseEvent, useCallback, useMemo, useState } from 'react';
import {
    Calendar as RBCalendar, CalendarProps, dateFnsLocalizer, Event, View, Views
} from 'react-big-calendar';
import { v4 as uuidv4 } from 'uuid';
import {
    DatePickerEventFormData, EventFormData, EventInfo, Todo
} from '~/utils/types/calendar.types';

import { Box, Button, ButtonGroup, Card, CardContent, CardHeader, Divider } from '@mui/material';

import {
    AddDatePickerEventModal, AddEventModal, AddTodoModal, EventSummary, EventSummaryModal
} from './molecules';

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const initialEventFormState: EventFormData = {
  description: "",
  todoId: undefined,
};

const initialDatePickerEventFormData: DatePickerEventFormData = {
  description: "",
  todoId: undefined,
  allDay: false,
  start: undefined,
  end: undefined,
};

export default function Calendar() {
  const [openSlot, setOpenSlot] = useState(false);
  const [openDatepickerModal, setOpenDatepickerModal] = useState(false);
  const [openTodoModal, setOpenTodoModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Event | EventInfo | null>(
    null,
  );

  const [eventInfoModal, setEventInfoModal] = useState(false);

  const [events, setEvents] = useState<EventInfo[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [calendarView, setCalendarView] = useState<View>(Views.WEEK);
  const [calendarDate, setCalendarDate] = useState(new Date(2015, 3, 1));

  const [eventFormData, setEventFormData] = useState<EventFormData>(
    initialEventFormState,
  );

  const [datePickerEventFormData, setDatePickerEventFormData] =
    useState<DatePickerEventFormData>(initialDatePickerEventFormData);

  const handleSelectSlot = useCallback((event: Event | EventInfo) => {
    setOpenSlot(true);
    setCurrentEvent(event);
  }, []);

  const handleSelectEvent = useCallback((event: EventInfo) => {
    setCurrentEvent(event);
    setEventInfoModal(true);
  }, []);

  const handleClose = useCallback(() => {
    setEventFormData(initialEventFormState);
    setOpenSlot(false);
  }, []);

  const handleDatePickerClose = useCallback(() => {
    setDatePickerEventFormData(initialDatePickerEventFormData);
    setOpenDatepickerModal(false);
  }, []);

  const onAddEvent = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const data: EventInfo = {
      ...eventFormData,
      id: uuidv4(),
      start: currentEvent?.start,
      end: currentEvent?.end,
    };

    const newEvents = [...events, data];

    setEvents(newEvents);
    handleClose();
  }, []);

  const onAddEventFromDatePicker = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const addHours = (date: Date | undefined, hours: number) => {
        return date ? date.setHours(date.getHours() + hours) : undefined;
      };

      const setMinToZero = (date: any) => {
        date.setSeconds(0);

        return date;
      };

      const data: EventInfo = {
        ...datePickerEventFormData,
        id: uuidv4(),
        start: setMinToZero(datePickerEventFormData.start),
        end: datePickerEventFormData.allDay
          ? addHours(datePickerEventFormData.start, 12)
          : setMinToZero(datePickerEventFormData.end),
      };

      const newEvents = [...events, data];

      setEvents(newEvents);
      setDatePickerEventFormData(initialDatePickerEventFormData);
    },
    [],
  );

  const onDeleteEvent = useCallback(() => {
    setEvents(() =>
      [...events].filter((e) => e.id !== (currentEvent as EventInfo).id!),
    );
    setEventInfoModal(false);
  }, []);

  const onView = useCallback(
    (newView: View) => setCalendarView(newView),
    [setCalendarView],
  );

  const onNavigate = useCallback(
    (newDate: Date) => setCalendarDate(newDate),
    [],
  );

  const calendarProps = useMemo(
    (): CalendarProps<EventInfo, {}> => ({
      localizer,
      events,
      onSelectEvent: handleSelectEvent,
      onSelectSlot: handleSelectSlot,
      selectable: true,
      components: { event: EventSummary },
      date: calendarDate,
      onNavigate: onNavigate,
      view: calendarView,
      onView: onView,
      eventPropGetter: (event: EventInfo) => {
        const hasTodo = todos.find((todo) => todo.id === event.todoId);
        return {
          style: {
            backgroundColor: hasTodo ? hasTodo.color : "b64fc8",
            borderColor: hasTodo ? hasTodo.color : "b64fc8",
          },
        };
      },
      style: { height: 900 },
    }),
    [],
  );

  return (
    <Card>
      <CardHeader
        title="Calendar"
        subheader="Create Events and Todos and manage them easily"
      />
      <Divider />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <ButtonGroup
            size="large"
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => setOpenDatepickerModal(true)}
              size="small"
              variant="contained"
            >
              Add event
            </Button>
            <Button
              onClick={() => setOpenTodoModal(true)}
              size="small"
              variant="contained"
            >
              Create todo
            </Button>
          </ButtonGroup>
        </Box>
        <Divider style={{ margin: 10 }} />
        <AddEventModal
          open={openSlot}
          handleClose={handleClose}
          eventFormData={eventFormData}
          setEventFormData={setEventFormData}
          onAddEvent={onAddEvent}
          todos={todos}
        />
        <AddDatePickerEventModal
          open={openDatepickerModal}
          handleClose={handleDatePickerClose}
          datePickerEventFormData={datePickerEventFormData}
          setDatePickerEventFormData={setDatePickerEventFormData}
          onAddEvent={onAddEventFromDatePicker}
          todos={todos}
        />
        <EventSummaryModal
          open={eventInfoModal}
          handleClose={() => setEventInfoModal(false)}
          onDeleteEvent={onDeleteEvent}
          currentEvent={currentEvent as EventInfo | null}
        />
        <AddTodoModal
          open={openTodoModal}
          handleClose={() => setOpenTodoModal(false)}
          todos={todos}
          setTodos={setTodos}
        />
        <RBCalendar {...calendarProps} />
      </CardContent>
    </Card>
  );
}
