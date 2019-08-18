import React from "react";
import { SidebarItem } from "./style";

const sidebarList = ["Home", "About", "Portfolio", "Resume", "Contact"];
const activeSidebar = "Home";

const renderSidebarItem = () =>
  sidebarList.map(item => (
    <SidebarItem isActive={item === activeSidebar} key={item}>
      {item}
    </SidebarItem>
  ));

const Sidebar = () => renderSidebarItem();

export default Sidebar;
