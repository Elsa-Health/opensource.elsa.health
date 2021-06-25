// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import SymptomAssessmentIndex from "../../../pages/health-assistant";


describe("Symptom Assessment Index", () => {
    render(<SymptomAssessmentIndex />)

    expect(screen.getByTestId("SymptomAssessmentIndex")).toBeDefined();
})