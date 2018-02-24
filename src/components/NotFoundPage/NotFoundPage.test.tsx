import { shallow } from "enzyme";
import NotFoundPage from "./NotFoundPage";
import * as React from "react";
import toJson from "enzyme-to-json";

/*it("renders 404 message", () => {
  const wrapper = shallow(<NotFoundPage location={"/404"} />);
  const content = (
    <h1>This page could not be found. No match for {location.pathname}</h1>
  );
  expect(wrapper.contains(content)).toEqual(true);
});*/

it("404 component renders correctly", () => {
  const wrapper = shallow(<NotFoundPage location={"/404"} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
