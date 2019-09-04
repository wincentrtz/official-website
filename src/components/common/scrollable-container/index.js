import React from "react";
import { connect } from "react-redux";

import { moveToNextPage, moveToPreviousPage } from "store/page/actions";
import { MainContainer } from "./style";

const ONE_PAGE_HEIGHT_PROPERTY = document.documentElement.scrollHeight;
const NEXT_PAGE = "NEXT_PAGE";
const PREVIOUS_PAGE = "PREVIOUS_PAGE";
const EXPERIENCE_PAGE = 0;

const ScrollableContainer = ({
  children,
  currentPage,
  isScrolling,
  moveToPreviousPage,
  moveToNextPage
}) => {
  const scrollHeight = currentPage * -ONE_PAGE_HEIGHT_PROPERTY;

  const scrollPage = e => {
    if (isUseOnePageScroll(e.clientY)) {
      const direction = e.deltaY < 0 ? PREVIOUS_PAGE : NEXT_PAGE;
      updateCurrentPage(direction);
    }
  };

  const isUseOnePageScroll = yAxis =>
    !isScrolling &&
    (currentPage !== EXPERIENCE_PAGE || !isOnExperienceCardScroll(yAxis));

  const isOnExperienceCardScroll = yAxis =>
    verticalPositionByPercentage(yAxis) >= 40 &&
    verticalPositionByPercentage(yAxis) <= 75;

  const verticalPositionByPercentage = yAxis =>
    ((yAxis % ONE_PAGE_HEIGHT_PROPERTY) * 100) / ONE_PAGE_HEIGHT_PROPERTY;

  const updateCurrentPage = direction => {
    if (direction === PREVIOUS_PAGE) moveToPreviousPage();
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
)(ScrollableContainer);
