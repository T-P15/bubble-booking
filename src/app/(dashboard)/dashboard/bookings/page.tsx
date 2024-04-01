"use client";
import { SyntheticEvent, useState } from "react";
import BookingTabs from "~/components/bookings/bookingTabs";
import Header from "~/components/dashboard/Header";

export default function Bookings() {
  const [value, setValue] = useState("1");

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Header
        title="Bookings"
        subtitle="See upcoming and past events booked through your event type links."
      />
      <div>
        <BookingTabs />
      </div>
    </>
  );
}
