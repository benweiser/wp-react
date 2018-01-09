import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Link from "./Link";

it("Link component renders correctly", () => {
  const wrapper = shallow(
    <Link href={"http://www.google.com"} linkText={"Google"} />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
