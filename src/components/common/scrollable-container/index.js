import React, { Component } from "react";
import { MainContainer } from "./style";

const ONE_PAGE_HEIGHT_PROPERTY = -800;
const INITIAL_PAGE = 0;
class ScrollableContainer extends Component {
  state = {
    inScroll: false,
    page: 0
  };

  wheel(e) {
    const { inScroll } = this.state;
    if (!inScroll) {
      const direction = e.deltaY < 0 ? "up" : "down";
      const page = this.getNewPage(direction);
      this.setState({ inScroll: true, page });
      setTimeout(() => {
        this.setState({ inScroll: false });
      }, 2000);
    }
  }

  getNewPage(direction) {
    let { page } = this.state;
    const LAST_PAGE = this.props.children.length - 1;
    if (direction === "up") page--;
    else page++;
    if (page < 0) page = INITIAL_PAGE;
    else if (page > LAST_PAGE) page = LAST_PAGE;
    return page;
  }

  render() {
    const { children } = this.props;
    const { page } = this.state;
    const scrollHeight = page * ONE_PAGE_HEIGHT_PROPERTY;
    return (
      <MainContainer scrollHeight={scrollHeight} onWheel={e => this.wheel(e)}>
        {children}
      </MainContainer>
    );
  }
}

export default ScrollableContainer;
