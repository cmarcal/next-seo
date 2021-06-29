import React, { ReactElement, useEffect } from "react";
import { ImageCard } from "../../components/imageCard";
import { Loading } from "../../components/loading";
import { useGetImages } from "../../hooks/useGetImages";
import { Container, Title, Images, Description } from "./styles";

export const GalleryTemplate = (): ReactElement => {
  const { imagesDetails, isLoading, handleGetImages } = useGetImages();

  useEffect(() => {
    handleGetImages();
  }, [handleGetImages]);

  return (
    <Container>
      <Title>Welcome to Gallery</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        laoreet, orci vitae tempus laoreet, erat quam mattis lacus, et ultricies
        nibh ligula non libero. Etiam vel dui finibus, rhoncus erat et, mollis
        enim. Vestibulum posuere mauris quis magna porttitor, ultricies placerat
        tellus egestas. In nec vestibulum turpis, eget aliquet mauris.
        Vestibulum ornare eget nibh vitae posuere. Mauris mattis tristique
        dolor, varius varius odio egestas placerat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Maecenas commodo erat a tellus ornare, nec
        vulputate arcu scelerisque. Integer id sapien risus. Duis bibendum,
        velit sed mollis imperdiet, sem nisl placerat turpis, vel tristique diam
        lectus ullamcorper mi. Proin id nisi porttitor, suscipit orci nec,
        accumsan libero. Integer eget eleifend nisi. Quisque finibus ultrices
        augue, et imperdiet lectus commodo et. Aenean at ligula egestas.
      </Description>
      {isLoading && <Loading />}
      {imagesDetails && (
        <Images>
          {imagesDetails.map(({ id, author, download_url }) => (
            <ImageCard key={id} author={author} url={download_url} />
          ))}
        </Images>
      )}
    </Container>
  );
};
