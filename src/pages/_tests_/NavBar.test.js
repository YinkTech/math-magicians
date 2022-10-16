import react from "react";
import renderer from "react-test-renderer";
import NavBar from "./../NavBar";
import { BrowserRouter as Router } from "react-router-dom";

it("if it renders correctly", () => {
    const navbar = renderer
    .create(
        <Router>
            <NavBar />
        </Router>
    )
    .toJSON();
  expect(navbar).toMatchSnapshot();
});