import React, { ReactElement } from "react";
import Image from "next/image";
import { ContainerImage, AuthorImage } from "./styles";

interface Props {
  author: string;
  url: string;
}

export const ImageCard = ({ author, url }: Props): ReactElement => {
  return (
    <ContainerImage>
      <Image
        src={url}
        alt="Gallery image"
        width={20}
        height={20}
        layout="responsive"
      />
      <AuthorImage>{author}</AuthorImage>
    </ContainerImage>
  );
};
