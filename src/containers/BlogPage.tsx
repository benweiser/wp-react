import * as React from "react";
import axios from "axios";
import Post from "../models/Post";
import Posts from "../components/Posts";
import styled from "styled-components";

interface PostsProps {
  id: number;
}

export interface PostsState {
  // isLoaded: boolean;
  posts: Post[];
  // test: string[];
}

class BlogPage extends React.Component<PostsProps, PostsState> {
  items: JSX.Element[];
  test: {
    name: string;
    phone: string;
  };
  postItems: JSX.Element[];

  constructor(props: PostsProps) {
    super(props);
    this.state = {
      // isLoaded: false,
      posts: []
      // test: ["hello", "hello2", "hello3"]
    };

    /*    this.items = this.state.test.map((item, index) => (
      <li key={index}>{item}</li>
    ));*/

    /*        this.postItems = [...this.state.posts].map((item, index) =>
            <Posts key={index} posts={this.state.posts}/>
        );*/
  }

  componentDidMount() {
    axios.get("https://benweiser.com/wp-json/wp/v2/posts").then(response => {
      console.log("response", response);
      this.setState({
        // isLoaded: true,
        posts: response.data.map((key: object) => new Post(key))
      });
      // console.log("state", this.state);
    })
                .then(response => {
                this.postItems = [...this.state.posts].map((post, index) =>
                    <Posts key={index} posts={post}/>
                );
            });
  }

  render() {
    // const {posts} = this.state;
    return (
      <StyledBlogPage>
        {this.postItems}
        {/*             {
                 Object.keys(this.state).map((key, index) => (
                     <p key={index}> this is my key {key} and this is my value {this.state[key]}</p>
                 ))
             }*/}
      </StyledBlogPage>
    );
  }
}

const StyledBlogPage = styled.div`
max-width: 1280px;
margin: 0 auto;
padding: 0 16px;
`;

export default BlogPage;
