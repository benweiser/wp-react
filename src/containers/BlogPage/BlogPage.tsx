import * as React from "react";
import axios from "axios";
import Post from "../../models/Post";
import Posts from "../../components/Posts";
import styled from "styled-components";
import ReactLoading from "react-loading";
import * as localForage from "localforage";
import { PostItem } from "../../interfaces/PostItem";

interface PostsProps {}

interface PostsState {
  isLoaded: boolean;
  posts: Post[];
}

class BlogPage extends React.Component<PostsProps, PostsState> {
  constructor(props: PostsProps) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: []
    };
  }

  componentDidMount() {
    localForage.getItem("BWPosts").then(posts => {
      if (posts === null) {
        this.makeRequest();
      } else {
        this.setState({
          isLoaded: true,
          posts: posts as Post[]
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
            posts: posts as Post[]
          });
        });
    });
  }
}

const StyledPage = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 16px 0;
`;

export default BlogPage;
