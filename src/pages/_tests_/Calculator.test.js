import React from "react";
import renderer from "react-test-renderer";
import Calculator from "./../Calculator";

it("If it renders correctly", () => {
    const cal = renderer
    .create(<Calculator />)
    .toJSON();
    expect(cal).toMatchSnapshot();
});