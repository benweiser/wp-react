import * as React from "react";
import Post from "../models/Post";
import styled from "styled-components";

export interface Props {
  posts: Post;
}

const Posts: React.SFC<Props> = ({ posts }: Props): JSX.Element => {
  const { title, excerpt, better_featured_image } = posts;
  console.log("posts", posts);
  return (
    <div className="post">
      <StyledThumbnail src={better_featured_image.source_url} />
      <h1>{title.rendered}</h1>
      <p dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
    </div>
  );
};

const StyledThumbnail = styled.img`
max-width: 250px;
`;

export default Posts;
