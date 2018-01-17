import * as React from "react";
import { RootStoreState } from "../stores/RootStoreState";
import { connect, Dispatch } from "react-redux";
import { PostsAction, requestAPIData, RequestAPIData } from "../actions/PostsActions";
import Posts from "../components/Posts";
import styled from "styled-components";
import Post from "../models/Post";

interface PostsProps {
  posts: Post[];
  requestApiData: () => RequestAPIData;
}

interface PostsState {}

class PostsPageContainer extends React.Component<PostsProps, PostsState> {
  constructor(props: PostsProps) {
    super(props);
  }
  render(): JSX.Element {
    const { posts } = this.props;
    return (
      <StyledPage>
        {[...posts].map((post, index) => <Posts key={index} posts={post} />)}
      </StyledPage>
    );
  }
}

const StyledPage = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 16px 0;
`;

const mapStateToProps = (state: RootStoreState) => state.PostsReducer;

const mapDispatchToProps = (dispatch: Dispatch<PostsAction>) => {
  return {
    requestApiData: () => dispatch(requestAPIData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPageContainer);
