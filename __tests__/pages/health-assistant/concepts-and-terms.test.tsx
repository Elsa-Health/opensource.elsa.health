// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import Terminology from "../../../pages/health-assistant/concepts-and-terms";

describe("Concepts and Terminologies", () =>{
    test("Terminologies", () => {
        render(<Terminology />)
        expect(screen.getByTestId("terminology")).toBeInTheDocument();
    })
})