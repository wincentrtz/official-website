import React, { Component } from "react";
import { createPortal } from "react-dom";
import { ModalContainer } from "./style";

const modalRoot = document.getElementById("modal");

class Modal extends Component {
  constructor(props) {
    super(props);
    this.element = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }
  render() {
    const { showModal } = this.props;
    return createPortal(
      <ModalContainer showModal={showModal}>
        {this.props.children}
      </ModalContainer>,
      this.element
    );
  }
}

export default Modal;
