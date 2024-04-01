import { SyntheticEvent, useState } from "react";
import { BookingType } from "~/utils/types/booking.types";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";

import CanceledTab from "./tabs/canceledTab";
import PastTab from "./tabs/pastTab";
import RecurringTab from "./tabs/recurringTab";
import UnconfirmedTab from "./tabs/unconfirmedTab";
import UpcomingTab from "./tabs/upcomingTab";

export default function BookingTabs() {
  const [activeTab, setActiveTab] = useState<BookingType>(BookingType.UPCOMING);

  const handleChange = (_: SyntheticEvent, selected: string) => {
    const selectedTab = selected as BookingType;
    setActiveTab(selectedTab);
  };

  return (
    <TabContext value={activeTab}>
      <Box>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label={BookingType.UPCOMING} value={BookingType.UPCOMING} />
          <Tab
            label={BookingType.UNCONFIRMED}
            value={BookingType.UNCONFIRMED}
          />
          <Tab label={BookingType.RECURRING} value={BookingType.RECURRING} />
          <Tab label={BookingType.PAST} value={BookingType.PAST} />
          <Tab label={BookingType.CANCELED} value={BookingType.CANCELED} />
        </TabList>
      </Box>
      <TabPanel value={BookingType.UPCOMING}>
        <UpcomingTab />
      </TabPanel>
      <TabPanel value={BookingType.UNCONFIRMED}>
        <UnconfirmedTab />
      </TabPanel>
      <TabPanel value={BookingType.RECURRING}>
        <RecurringTab />
      </TabPanel>
      <TabPanel value={BookingType.PAST}>
        <PastTab />
      </TabPanel>
      <TabPanel value={BookingType.CANCELED}>
        <CanceledTab />
      </TabPanel>
    </TabContext>
  );
}
