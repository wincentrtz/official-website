import React, { Fragment } from "react";

import {
  HelloSection,
  NameSection,
  DescriptionSection,
  DownloadButton,
  NameLabel
} from "./style";

const HomeContent = () => (
  <Fragment>
    <HelloSection>
      <span>-</span> <span>Hello</span>
    </HelloSection>
    <NameSection>
      I'm <NameLabel>Wincent</NameLabel>
    </NameSection>
    <DescriptionSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
      repellendus eveniet. Cumque necessitatibus, reprehenderit ratione aliquam
      alias repudiandae obcaecati, fugiat sint repellat laboriosam suscipit
      magnam eius soluta voluptatibus voluptatem molestiae.
    </DescriptionSection>
    <DownloadButton>DOWNLOAD CV</DownloadButton>
  </Fragment>
);

export default HomeContent;
