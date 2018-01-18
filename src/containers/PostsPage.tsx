import * as React from "react";
import { RootStoreState } from "../stores/RootStoreState";
import { connect, Dispatch } from "react-redux";
import {
  PostsAction,
  requestAPIData,
  RequestAPIData
} from "../actions/PostsActions";
import styled from "styled-components";
import Post from "../models/Post";
import ReactLoading from "react-loading";
import Posts from "../components/Posts";

interface PostsProps {
  posts: Post[];
  isFetching: boolean;
  requestApiData: () => RequestAPIData;
}

interface PostsState {}

class PostsPageContainer extends React.Component<PostsProps, PostsState> {
  constructor(props: PostsProps) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.posts.length) {
      this.props.requestApiData();
    }
  }

  render(): JSX.Element {
    const { posts, isFetching } = this.props;
    return (
      <StyledPage>
        {!isFetching && posts.length ? (
          [...posts].map((post, index) => <Posts key={index} posts={post} />)
        ) : (
          <ReactLoading type={"bubbles"} color={"#ccc"} />
        )}
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
