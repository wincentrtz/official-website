import React, { Component, Fragment } from "react";

import Home from "pages/home";

import {
  GlobalStyle,
  PageContainer,
  SidebarContainer,
  PageContent
} from "./style";
import Navbar from "./components/common/navbar";
import Sidebar from "./components/common/sidebar";
import ScrollableContainer from "./components/common/scrollable-container";

class App extends Component {
  state = {
    inScroll: false,
    direction: "",
    page: 0
  };

  wheel(e) {
    const { inScroll } = this.state;
    if (!inScroll) {
      const direction = e.deltaY < 0 ? "up" : "down";
      const page = e.deltaY < 0 ? 0 : 1;
      this.setState({ inScroll: true, direction, page });
      setTimeout(() => {
        this.setState({ inScroll: false });
      }, 2000);
    }
  }
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Navbar />
        <ScrollableContainer>
          <PageContainer>
            <PageContent>
              <Home />
            </PageContent>
          </PageContainer>
          <PageContainer>
            <PageContent>
              <Home />
            </PageContent>
          </PageContainer>
        </ScrollableContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
      </Fragment>
    );
  }
}
export default App;
