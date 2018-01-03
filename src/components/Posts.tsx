import * as React from "react";
import Post from "../models/Post";
import styled from "styled-components";
import Image from "./Image";
import Link from "./Link";

export interface Props {
  posts: Post;
}

const Posts: React.SFC<Props> = ({ posts }: Props): JSX.Element => {
  const { title, excerpt, better_featured_image, link } = posts;
  console.log("posts", posts);
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

export default Posts;
