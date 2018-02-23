import { REQUEST_API_DATA } from "../action-types/index";
import { requestAPIData } from "./PostsActions";
import { APIConstants } from "../../lib/APIConstants";

it("should create an action to request api data", () => {
  const expectedAction = {
    query: "get",
    type: REQUEST_API_DATA,
    method: APIConstants.POSTS
  };
  console.log(expectedAction);
  expect(requestAPIData("get", APIConstants.POSTS)).toEqual(expectedAction);
});
