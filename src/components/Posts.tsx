import * as React from "react";
import Post from "../lib/models/Post";
import styled from "styled-components";
import Image from "./Image/Image";
import Link from "./Link/Link";

interface PostsProps {
  readonly posts: Post;
}

const StyledPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-bottom: 32px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

const StyledThumbnail = styled(Image)`
  max-width: 250px;
`;

const Posts: React.SFC<PostsProps> = ({ posts }: PostsProps): JSX.Element => {
  const { title, excerpt, better_featured_image, link } = posts;
  return (
    <StyledPost>
      <StyledThumbnail
        src={better_featured_image.source_url}
        alt={better_featured_image.alt_text}
        className={"bw-img"}
      />
      <StyledContent>
        <h1>{title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
        <Link href={link} linkText={"Learn More"} />
      </StyledContent>
    </StyledPost>
  );
};

export default Posts;
