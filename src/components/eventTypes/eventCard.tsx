"use client";
import { ChangeEvent, useCallback } from "react";
import { Event } from "~/utils/types/event.types";

import { Link, ShortText } from "@mui/icons-material";
import { Paper, Switch, ToggleButton, ToggleButtonGroup } from "@mui/material";

export type EventCardProps = { event: Event };

export default function EventCard({ event }: EventCardProps) {
  const handleToggleEvent = useCallback(
    (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
      console.log(event.title + " is " + checked);
    },
    [],
  );

  return (
    <Paper
      variant="outlined"
      className="flex w-full items-center justify-between transition hover:cursor-pointer hover:border-gray-300 hover:bg-gray-100 hover:shadow"
    >
      <div className="group flex w-full max-w-full items-center justify-between overflow-hidden">
        <a
          className="flex-1 overflow-hidden p-4 text-sm sm:px-6"
          href={event.url}
        >
          <div className="flex items-center justify-start gap-1">
            <span className="text-default font-semibold ltr:mr-1 rtl:ml-1">
              {event.title}
            </span>
            <small className="text-subtle hidden font-normal leading-4 sm:inline">
              {event.subtitle}
            </small>
          </div>
          <div className="text-subtle">{event.duration}m</div>
        </a>
        <div className="hidden p-4 sm:mt-0 sm:flex sm:px-6">
          <div className="flex justify-between space-x-2 rtl:space-x-reverse">
            <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
              <div className="self-center rounded-md p-2">
                <Switch
                  defaultChecked={event.isEnabled}
                  onChange={handleToggleEvent}
                  color="default"
                />
              </div>
              <div>
                <ToggleButtonGroup>
                  <ToggleButton
                    value=""
                    onClick={() => alert(event.title + ": link")}
                  >
                    <Link />
                  </ToggleButton>
                  <ToggleButton
                    value=""
                    onClick={() => alert(event.title + ": short-text")}
                  >
                    <ShortText />
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}
