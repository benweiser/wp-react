import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Logo from "./Logo";

it("Logo component renders correctly", () => {
  const wrapper = shallow(
      <Logo/>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
