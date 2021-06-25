// import dependencies
import React from "react";

// import react-testing methods
import { render } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import SidebarContent from "../../../../pages/health-assistant/components/SidebarContent";

describe("Sidebar Context", () => {
    test("Is it rendered", () => {
        render(<SidebarContent />)
    })
})