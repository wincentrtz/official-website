import React, { Fragment } from "react";

import Navbar from "./components/common/navbar";
import Sidebar from "./components/common/sidebar";
import ScrollableContainer from "./components/common/scrollable-container";
import HomePage from "pages/home";
import AboutPage from "./pages/about";
import ExperiencePage from "./pages/experience";
import PortofolioPage from "./pages/portofolio";
import {
  GlobalStyle,
  PageContainer,
  SidebarContainer,
  PageContent
} from "./style";

const PAGE = [
  <HomePage />,
  <AboutPage />,
  <PortofolioPage />,
  <ExperiencePage />
];

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
