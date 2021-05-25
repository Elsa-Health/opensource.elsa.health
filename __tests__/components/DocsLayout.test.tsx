// import dependencies
import React from "react";

// import react-testing methods
import { fireEvent, render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import DocsLayout from "../../components/DocsLayout";
import Button from "../../components/DocsLayout";

describe("Layout to be shown", () =>{
    test("Renders Layout", () => {
        const onClick = jest.fn();

        render(<DocsLayout children title={"Elsa Health | Healthcare for all"} sidebar={onClick} sidebarTitle={"Elsa Health"}/>)
        expect(screen.getByTestId("DocsLayout")).toBeInTheDocument();
    })
})

describe("Button Component", () => {

	test("Button click function gets triggered", () => {
		const callBack = jest.fn();
        const onClick = jest.fn();
		render(<Button />);

		const button = screen.getByTestId("button");

		fireEvent.click(button);

		expect(onClick).toBeCalledTimes(0);
	});
});