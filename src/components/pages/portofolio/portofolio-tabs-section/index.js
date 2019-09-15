import React from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

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

const PortofolioTabs = ({ location, history }) => {
  const { search } = location;
  const activeTab = queryString.parse(search).currentPortofolio || "MOBILE";

  const renderTabs = () =>
    TABS.map(tab => (
      <TabButton
        active={tab.code === activeTab}
        onClick={() => handleChangeActivePortofolioTab(tab.code)}
        key={tab.code}
      >
        {tab.label}
      </TabButton>
    ));

  const handleChangeActivePortofolioTab = code => {
    history.push({ search: `currentPortofolio=${code}` });
  };

  return <TabsContainer>{renderTabs()}</TabsContainer>;
};

export default withRouter(PortofolioTabs);
