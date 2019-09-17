import React from "react";
import { ContactContainer } from "./style";
import ContactHeaderSection from "components/pages/contact/contact-header-section";
import ContactDetailSection from "components/pages/contact/contact-detail-section";

const ContactPage = () => (
  <ContactContainer>
    <ContactHeaderSection />
    <ContactDetailSection />
  </ContactContainer>
);

export default ContactPage;
