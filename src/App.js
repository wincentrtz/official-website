import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import {
  GlobalStyle,
  MainContainer,
  PageContainer,
  SidebarContainer
} from "./style";
import Navbar from "./components/common/navbar";
import Sidebar from "./components/common/sidebar";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <MainContainer>
        <PageContainer>
          <Switch>
            <Route path="" component={Home} />
          </Switch>
        </PageContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
      </MainContainer>
    </Fragment>
  );
};

export default App;
