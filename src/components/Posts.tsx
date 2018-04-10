import * as React from "react";
import Post from "../lib/models/Post";
import styled from "styled-components";
import Image from "./Image/Image";
import Link from "./Link/Link";
import { display, flexDirection, space } from "styled-system";

interface PostsProps {
  readonly posts: Post;
}

const StyledPost = styled.div`
  ${space};
  grid-template-columns: 1fr 4fr;
  @media (min-width: 40em) {
    display: grid;
  }
`;

const StyledContent = styled.div`
  ${display};
  ${flexDirection};
  ${space};
`;

const StyledThumbnail = styled(Image)`
  max-width: 250px;
`;

const Posts: React.SFC<PostsProps> = ({ posts }: PostsProps): JSX.Element => {
  const { title, excerpt, better_featured_image, link } = posts;
  return (
    <StyledPost p={2}>
      <StyledThumbnail
        src={better_featured_image.source_url}
        alt={better_featured_image.alt_text}
        className={"bw-img"}
      />
      <StyledContent mb={2} pl={3} display="flex" flexDirection="column">
        <h1>{title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
        <Link href={link} linkText={"Learn More"} />
      </StyledContent>
    </StyledPost>
  );
};

export default Posts;
