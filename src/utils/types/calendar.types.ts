import { Event } from 'react-big-calendar';

export interface Todo {
  id: string;
  title: string;
  color?: string;
}

export interface EventInfo extends Event {
  id: string;
  description: string;
  todoId?: string;
}

export interface EventFormData {
  description: string;
  todoId?: string;
}

export interface DatePickerEventFormData {
  description: string;
  todoId?: string;
  allDay: boolean;
  start?: Date;
  end?: Date;
}