import React, { Component } from "react";
import { createPortal } from "react-dom";
import { ModalContainer, ModalContent } from "./style";
import OutsideAlerter from "../../../utils/outside-alerter";

const modalRoot = document.getElementById("modal");

class Modal extends Component {
  element = document.createElement("div");

  componentDidMount() {
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  render() {
    const { showModal, children, handleCloseModal } = this.props;
    return createPortal(
      <ModalContainer showModal={showModal}>
        {showModal && (
          <OutsideAlerter
            showModal={showModal}
            handleCloseModal={handleCloseModal}
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
