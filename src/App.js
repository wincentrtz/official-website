import React, { Fragment } from "react";

import Navbar from "./components/common/navbar";
import Sidebar from "./components/common/sidebar";
import ScrollableContainer from "./components/common/scrollable-container";
import Home from "pages/home";
import About from "./pages/about";
import Experience from "./pages/experience";
import Portofolio from "./pages/portofolio";
import {
  GlobalStyle,
  PageContainer,
  SidebarContainer,
  PageContent
} from "./style";

const PAGE = [<Home />, <About />, <Experience />];

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Navbar />
    <ScrollableContainer>{renderPage()}</ScrollableContainer>
    <SidebarContainer>
      <Sidebar />
    </SidebarContainer>
  </Fragment>
);

const renderPage = () =>
  PAGE.map((p, index) => (
    <PageContainer key={index}>
      <PageContent>{p}</PageContent>
    </PageContainer>
  ));

export default App;
