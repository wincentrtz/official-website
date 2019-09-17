import React from "react";
import {
  NameTextField,
  ContactFormContainer,
  EmailLabel,
  MessageTextArea,
  InputGroup
} from "./style";

const ContactFormSection = () => (
  <ContactFormContainer>
    <InputGroup>
      <NameTextField type="text" placeholder="Your Name" />
    </InputGroup>
    <InputGroup>
      <label>Email</label>
      <EmailLabel>wincent@budak.com</EmailLabel>
    </InputGroup>
    <InputGroup>
      <label>Text Message</label>
      <MessageTextArea rows="3" />
    </InputGroup>
  </ContactFormContainer>
);

export default ContactFormSection;
