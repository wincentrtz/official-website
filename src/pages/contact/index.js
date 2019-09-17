import React from "react";
import { ContactContainer } from "./style";
import ContactHeaderSection from "components/pages/contact/contact-header-section";
import ContactDetailSection from "components/pages/contact/contact-detail-section";
import ContactFormSection from "../../components/pages/contact/contact-form-section";

const ContactPage = () => (
  <ContactContainer>
    <ContactHeaderSection />
    <ContactDetailSection />
    <ContactFormSection />
  </ContactContainer>
);

export default ContactPage;
