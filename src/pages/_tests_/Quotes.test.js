import React from "react";
import renderer from "react-test-renderer"
import Quotes from "./../Quotes";

it("If it renders correctly", () => {
    const quote = renderer
        .create(<Quotes />)
        .toJSON();
        expect(quote).toMatchSnapshot();
});