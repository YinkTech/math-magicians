import React from "react";
import renderer from "react-test-renderer";
import Home from "./../Home";

it("If it renders correctly", () => {
    const homes = renderer
        .create(<Home />)
        .toJSON();
        expect(homes).toMatchSnapshot();
});