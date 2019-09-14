import React from "react";
import { connect } from "react-redux";

import { changeActivePortofolioTab } from "store/portofolio/actions";
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

const PortofolioTabs = ({ activeTab, handleChangeActivePortofolioTab }) => {
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

  return <TabsContainer>{renderTabs()}</TabsContainer>;
};

const mapStateToProps = ({ portofolioReducers }) => {
  return {
    activeTab: portofolioReducers.activeTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangeActivePortofolioTab: code =>
      dispatch(changeActivePortofolioTab(code))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortofolioTabs);
