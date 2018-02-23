import axios from "axios";
import Post from "../../lib/models/Post";
import { PostItem } from "../../lib/interfaces/PostItem";
import { APIConstants } from "../../lib/APIConstants";
const makeRequest = async (
  method: string = "get",
  query: string = APIConstants.POSTS
) => {
  try {
    return await axios({
      method: method,
      url: `${APIConstants.BASE_URI}${query}`,
      data: {}
    }).then(response => response.data.map((post: PostItem) => new Post(post)));
  } catch (e) {
    console.log(e);
  }
};

export default makeRequest;
