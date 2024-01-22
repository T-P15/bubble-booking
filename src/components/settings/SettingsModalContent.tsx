/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";

import Overview from "./tabs/Overview";
import Profile from "./tabs/Profile";

function SettingsModalContent() {
  const [openTabIndex, setOpenTabIndex] = useState(0);

  const handleChange = (_: any, value: any) => {
    setOpenTabIndex(value as number);
  };

  return (
    <div className="flex flex-1">
      <TabContext value={openTabIndex.toString()}>
        <TabList
          orientation="vertical"
          onChange={handleChange}
          className="border-r"
        >
          <Tab label="Overview" value="0" />
          <Tab label="Profile" value="1" />
        </TabList>
        <TabPanel value="0">
          <Overview />
        </TabPanel>
        <TabPanel value="1">
          <Profile />
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default SettingsModalContent;
