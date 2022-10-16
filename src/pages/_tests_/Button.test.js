import React from "react";
import Button from "./../../components/Button";
import renderer from "react-test-renderer";

it("If it renders correctly", () => {
    const button = renderer
        .create(<Button />)
        .toJSON();
        expect(button).toMatchSnapshot();
});
