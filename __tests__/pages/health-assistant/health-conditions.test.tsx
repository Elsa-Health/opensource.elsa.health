// import dependencies
import React from "react";

// import react-testing methods
import { fireEvent, render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import HealthConditions from "../../../pages/health-assistant/health-conditions";

describe("Health Conditions", () => {
    test("Are the conditions set", () => {
        render(<HealthConditions />)
        expect(screen.getByTestId("HealthConditions")).toBeInTheDocument();
    })
})