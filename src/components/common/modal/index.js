import React, { Component } from "react";
import { createPortal } from "react-dom";
import { withRouter } from "react-router-dom";

import { ModalContainer, ModalContent } from "./style";
import OutsideAlerter from "utils/outside-alerter";

const modalRoot = document.getElementById("modal");

class Modal extends Component {
  element = document.createElement("div");

  componentDidMount() {
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  handleCloseModal = () => {
    this.props.history.push({});
  };

  render() {
    const { children, isOpen } = this.props;
    return createPortal(
      <ModalContainer isOpen={isOpen}>
        {isOpen && (
          <OutsideAlerter
            isOpen={isOpen}
            handleCloseModal={this.handleCloseModal}
          >
            <ModalContent>{children}</ModalContent>
          </OutsideAlerter>
        )}
      </ModalContainer>,
      this.element
    );
  }
}

export default withRouter(Modal);
