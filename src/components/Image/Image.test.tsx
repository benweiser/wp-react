import { shallow } from "enzyme";
import Image from "./Image";
import * as React from "react";
import toJson from "enzyme-to-json";

const logo = require("../../assets/images/logo.png");

it("Image component renders correctly", () => {
  const wrapper = shallow(
    <Image src={logo} alt={"al text"} className={"bw-img"} />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
