import React from "react";

import {
  TitleSection,
  DescriptionSection,
  FactContainer,
  CardContainer,
  CardFact,
  CardTitle,
  CardDescription
} from "./style";

import Book from "assets/images/book.svg";
import Coffee from "assets/images/coffee.svg";
import Github from "assets/images/github.svg";
import ProgrammingLanguage from "assets/images/programming-language.svg";

const facts = [
  {
    title: "Book Readed",
    icon: Book,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, repellendus eveniet."
  },
  {
    title: "Coffee Consumption",
    icon: Coffee,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, repellendus eveniet."
  },
  {
    title: "My Github",
    icon: Github,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, repellendus eveniet."
  },
  {
    title: "Programming Language",
    icon: ProgrammingLanguage,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, repellendus eveniet."
  }
];

const FactSection = () => (
  <FactContainer>
    <TitleSection>Facts About Me</TitleSection>
    <DescriptionSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
      repellendus eveniet. Cumque necessitatibus, reprehenderit ratione aliquam
      alias repudiandae obcaecati, fugiat sint repellat laboriosam suscipit
      magnam eius soluta voluptatibus voluptatem molestiae.
    </DescriptionSection>
    <CardContainer>{renderFact()}</CardContainer>
  </FactContainer>
);

const renderFact = () =>
  facts.map(f => (
    <CardFact>
      <img src={f.icon} />
      <CardTitle>{f.title}</CardTitle>
      <CardDescription>{f.description}</CardDescription>
    </CardFact>
  ));

export default FactSection;
