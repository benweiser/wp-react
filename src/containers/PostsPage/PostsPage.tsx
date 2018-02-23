import * as React from "react";
import { RootStoreState } from "../../redux/stores/RootStoreState";
import { connect, Dispatch } from "react-redux";
import {
  PostsAction,
  requestAPIData,
  RequestAPIData
} from "../../redux/actions/PostsActions";
import styled from "styled-components";
import Post from "../../lib/models/Post";
import ReactLoading from "react-loading";
import Posts from "../../components/Posts";
import { APIConstants } from "../../lib/APIConstants";

interface PostsProps {
  payload: Post[];
  isFetching: boolean;
  requestApiData: () => RequestAPIData;
}

interface PostsState {}

class PostsPage extends React.Component<PostsProps, PostsState> {
  constructor(props: PostsProps) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.payload.length) {
      this.props.requestApiData();
    }
  }

  render(): JSX.Element {
    const { payload, isFetching } = this.props;
    return (
      <StyledPage>
        {!isFetching && payload.length ? (
          [...payload].map((post, index) => <Posts key={index} posts={post} />)
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
    requestApiData: () => dispatch(requestAPIData("get", APIConstants.PAGES))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
