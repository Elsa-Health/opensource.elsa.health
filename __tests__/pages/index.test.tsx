// import dependencies
import React from "react";

// import react-testing methods
import { render } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import IndexPage from "../../pages";

describe ("Testing index",() => {
    test("Is The IndexPage shown", () =>{
        render(<IndexPage />)
        const index = jest.fn();
        console.log(index);
        expect(IndexPage()).toBeDefined();

    })
})