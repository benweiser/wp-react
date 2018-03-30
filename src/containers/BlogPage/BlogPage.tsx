import * as React from "react";
import axios from "axios";
import styled from "styled-components";
import ReactLoading from "react-loading";
import * as localForage from "localforage";
import { PostItem } from "../../lib/interfaces/PostItem";
import Post from "../../lib/models/Post";
import Posts from "../../components/Posts";

interface PostsProps {}

interface PostsState {
  readonly isLoaded: boolean;
  readonly posts: ReadonlyArray<Post>;
}

const StyledPage = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 16px 0;
`;

const initialPostsState = {
  isLoaded: false,
  posts: [],
};

class BlogPage extends React.Component<PostsProps, PostsState> {
  readonly state: PostsState = initialPostsState;
  constructor(props: PostsProps) {
    super(props);
  }

  componentDidMount() {
    localForage.getItem("BWPosts").then(posts => {
      if (posts === null) {
        this.makeRequest();
      } else {
        this.setState({
          isLoaded: true,
          posts: posts as ReadonlyArray<Post>
        });
      }
    });
  }

  render(): JSX.Element {
    const { posts, isLoaded } = this.state;
    return (
      <StyledPage>
        {isLoaded ? (
          [...posts].map((post, index) => <Posts key={index} posts={post} />)
        ) : (
          <ReactLoading type={"bubbles"} color={"#ccc"} />
        )}
      </StyledPage>
    );
  }

  private makeRequest(): void {
    axios.get("https://benweiser.com/wp-json/wp/v2/posts").then(response => {
      localForage
        .setItem("BWPosts", response.data.map((key: PostItem) => new Post(key)))
        .then(posts => {
          this.setState({
            isLoaded: true,
            posts: posts as ReadonlyArray<Post>
          });
        });
    });
  }
}

export default BlogPage;
