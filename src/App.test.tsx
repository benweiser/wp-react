import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { MemoryRouter } from "react-router";
import { shallow } from "enzyme";
import BlogPage from "./containers/BlogPage/BlogPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("invalid path should redirect to 404 Component <NotFoundPage/>", () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={["/blog"]}>
      <App />
    </MemoryRouter>
  );
  console.log("wrapper", wrapper.find(<BlogPage />));
  // console.log(wrapper.find(BlogPage));
  // expect(wrapper.find(<BlogPage id={1}/>)).toHaveLength(0);
  //  expect(wrapper.find(<NotFoundPage location={"/random"}/>)).toHaveLength(1);
});
