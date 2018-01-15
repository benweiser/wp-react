import axios from "axios";
import Post from "../models/Post";
import { PostItem } from "../interfaces/PostItem";
import { BASE_URI } from "../constants/index";

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
