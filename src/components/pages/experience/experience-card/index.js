import React from "react";

import {
  CardWrapper,
  CardHeader,
  CardBody,
  CardImage,
  CardTitle,
  CardDescription
} from "./style";

const ImgUrl =
  "https://media.beritagar.id/2015-08/0_0_1035_619_5142e375bb416be9a55b7f295ce75e4eab2f739a.jpg";

const ExperienceCard = () => (
  <CardWrapper>
    <CardHeader>
      <CardImage src={ImgUrl} />
    </CardHeader>
    <CardBody>
      <CardTitle>R&D QA Intern</CardTitle>
      <CardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        repellendus eveniet. Cumque necessitatibus, reprehenderit ratione
        aliquam alias repudiandae obcaecati.
      </CardDescription>
    </CardBody>
  </CardWrapper>
);

export default ExperienceCard;
