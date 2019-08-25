import React, { Component } from "react";
import { MainContainer } from "./style";

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
    if (direction === "up") page--;
    else page++;
    if (page < 0) page = 0;
    else if (page > this.props.children.length - 1)
      page = this.props.children.length - 1;
    return page;
  }

  render() {
    const { children } = this.props;
    const { page } = this.state;
    const scrollHeight = page * -800;
    return (
      <MainContainer scrollHeight={scrollHeight} onWheel={e => this.wheel(e)}>
        {children}
      </MainContainer>
    );
  }
}

export default ScrollableContainer;
