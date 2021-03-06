import React, { Fragment } from "react";

import Navbar from "./components/common/navbar";
import Sidebar from "./components/common/sidebar";
import ScrollableContainer from "./components/common/scrollable-container";
import HomePage from "pages/home";
import AboutPage from "./pages/about";
import ExperiencePage from "./pages/experience";
import PortofolioPage from "./pages/portofolio";
import { GlobalStyle, PageContainer, PageContent } from "./style";
import ContactPage from "./pages/contact";

const PAGE = [
  <HomePage />,
  <AboutPage />,
  <PortofolioPage />,
  <ExperiencePage />,
  <ContactPage />
];

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Navbar />
    <ScrollableContainer>{renderPage()}</ScrollableContainer>
    <Sidebar />
  </Fragment>
);

const renderPage = () =>
  PAGE.map((p, index) => (
    <PageContainer key={index}>
      <PageContent>{p}</PageContent>
    </PageContainer>
  ));

export default App;
