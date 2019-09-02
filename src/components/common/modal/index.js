import React, { Component } from "react";
import { createPortal } from "react-dom";
import { ModalContainer, ModalContent } from "./style";
import OutsideAlerter from "../../../utils/outside-alerter";

const modalRoot = document.getElementById("modal");

class Modal extends Component {
  state = {
    isOpen: false
  };

  element = document.createElement("div");

  componentDidMount() {
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  handleOpenModal = () => {
    this.setState({
      isOpen: true
    });
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
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

export default Modal;
