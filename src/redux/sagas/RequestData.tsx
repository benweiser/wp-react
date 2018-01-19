import axios from "axios";
import Post from "../../lib/models/Post";
import { PostItem } from "../../lib/interfaces/PostItem";
import { BASE_URI } from "../../lib/constants";
const makeRequest = async (query: string = "posts") => {
  try {
    return await axios
      .get(`${BASE_URI}${query}`)
      .then(response => response.data.map((post: PostItem) => new Post(post)));
  } catch (e) {
    console.log(e);
  }
};

export default makeRequest;
