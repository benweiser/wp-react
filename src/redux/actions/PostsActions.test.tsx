import { REQUEST_API_DATA } from "../action-types/index";
import { requestAPIData } from "./PostsActions";

it("should create an action to request api data", () => {
  const expectedAction = {
    type: REQUEST_API_DATA
  };
  expect(requestAPIData()).toEqual(expectedAction);
});
