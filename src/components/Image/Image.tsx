import * as React from "react";
import LazyLoad from "react-lazyload";
import Img from "react-image";
import ReactLoading from "react-loading";

export interface ImageProps {
  readonly alt: string;
  readonly src: string;
  readonly className?: string;
}

const Image: React.SFC<ImageProps> = ({
  className,
  alt,
  src
}: ImageProps): JSX.Element => {
  return (
    <div>
      <LazyLoad offset={100} height={200} once={true}>
        <Img
          className={className}
          src={[src, "http://via.placeholder.com/350x350"]}
          alt={alt}
          loader={<ReactLoading type={"bubbles"} color={"#ccc"} />}
        />
      </LazyLoad>
    </div>
  );
};

export default Image;
