import React, { useState } from "react";

import { TabsContainer, TabButton } from "./style";

const TABS = [
  {
    code: "MOBILE",
    label: "Mobile Apps"
  },
  {
    code: "WEB",
    label: "Web Development"
  },
  {
    code: "COMPETITION",
    label: "Competition"
  }
];

const PortofolioTabs = () => {
  const [active, setActive] = useState("MOBILE");

  const renderTabs = () =>
    TABS.map(tab => (
      <TabButton
        active={tab.code === active}
        onClick={() => setActive(tab.code)}
      >
        {tab.label}
      </TabButton>
    ));

  return <TabsContainer>{renderTabs()}</TabsContainer>;
};

export default PortofolioTabs;
