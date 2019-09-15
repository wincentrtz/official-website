import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { moveToNextPage, moveToPreviousPage } from "store/page/actions";
import { MainContainer } from "./style";

const ONE_PAGE_HEIGHT_PROPERTY = document.documentElement.scrollHeight;
const ONE_PAGE_WIDTH_PROPERTY = document.documentElement.scrollWidth;
const DOWN = "DOWN";
const UP = "UP";

const ScrollableContainer = ({
  children,
  currentPage,
  isScrolling,
  moveToPreviousPage,
  moveToNextPage,
  history
}) => {
  const scrollHeight = currentPage * -ONE_PAGE_HEIGHT_PROPERTY;

  const scrollPage = ({ clientX, clientY, deltaY }) => {
    if (isUseOnePageScroll(clientX, clientY)) {
      const direction = deltaY < 0 ? UP : DOWN;
      updateCurrentPage(direction);
      history.push({});
    }
  };

  const isUseOnePageScroll = (xAxis, yAxis) =>
    !isScrolling && !isOnExperienceCardScroll(xAxis, yAxis);

  const isOnExperienceCardScroll = (xAxis, yAxis) =>
    horizontalPositionByPercentage(xAxis) >= 10 &&
    horizontalPositionByPercentage(xAxis) <= 80 &&
    verticalPositionByPercentage(yAxis) >= 40 &&
    verticalPositionByPercentage(yAxis) <= 75;

  const horizontalPositionByPercentage = xAxis =>
    ((xAxis % ONE_PAGE_WIDTH_PROPERTY) * 100) / ONE_PAGE_WIDTH_PROPERTY;

  const verticalPositionByPercentage = yAxis =>
    ((yAxis % ONE_PAGE_HEIGHT_PROPERTY) * 100) / ONE_PAGE_HEIGHT_PROPERTY;

  const updateCurrentPage = direction => {
    if (direction === UP) moveToPreviousPage();
    else moveToNextPage();
  };

  return (
    <div onWheel={e => scrollPage(e)}>
      <MainContainer scrollHeight={scrollHeight}>{children}</MainContainer>
    </div>
  );
};

const mapStateToProps = ({ pageReducers }) => {
  const { currentPage, isScrolling } = pageReducers;
  return {
    currentPage,
    isScrolling
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moveToNextPage: () => dispatch(moveToNextPage()),
    moveToPreviousPage: () => dispatch(moveToPreviousPage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ScrollableContainer));
