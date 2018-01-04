import * as React from "react";
import LazyLoad from "react-lazyload";
import Img from "react-image";
import ReactLoading from "react-loading";
import styled from "styled-components";

export interface ImageProps {
  alt: string;
  src: string;
  className?: string;
}

const Image: React.SFC<ImageProps> = ({
  className,
  alt,
  src
}: ImageProps): JSX.Element => {
  return (
    <StyledImage>
      <LazyLoad offset={100} height={200} once={true}>
        <Img
          className={className}
          src={[src, "http://via.placeholder.com/350x350"]}
          alt={alt}
          loader={<ReactLoading type={"bubbles"} color={"#ccc"} />}
        />
      </LazyLoad>
    </StyledImage>
  );
};

const StyledImage = styled.div`
/*  padding-bottom: 100%;
  position: relative;
  height: 0;
  > img {
    position: absolute;
    top: 0;
    left: 0;*/
  }
`;

export default Image;
