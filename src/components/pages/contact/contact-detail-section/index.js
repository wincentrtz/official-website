import React from "react";
import {
  ContactDetailContainer,
  ContactListWrapper,
  ContactList
} from "./style";

const CONTACT_LIST = [
  "+6281378044616",
  "wincent@budak.com",
  "Jl K.H Syahdan no 105A"
];

const ContactDetailSection = () => {
  const renderContactListItem = () =>
    CONTACT_LIST.map(contact => (
      <ContactList key={contact}>{contact}</ContactList>
    ));
  return (
    <ContactDetailContainer>
      <ContactListWrapper>{renderContactListItem()}</ContactListWrapper>
    </ContactDetailContainer>
  );
};

export default ContactDetailSection;
