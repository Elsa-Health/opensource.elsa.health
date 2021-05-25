// import dependencies
import React from "react";

// import react-testing methods
import { fireEvent, render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import MainLayout from "../../components/MainLayout";
import Button from  "../../components/MainLayout";

describe("Main Layout", () =>{
    test ("Render Check", () => {
        const a = "Elsa Health as an organization is commited to equal access to healthcare for all. We do this the best way we know how, by building technologies to augment the capacity and skills of decision makers (healthcare workers, governments, researchrs, parents, guardians, and individuals) to support optimal decision making. Disease should be a thing of the past"; 
        render(<MainLayout title={"Elsa Health"} description={a}/>)
        expect (screen.getByTestId("MainLayout")).toBeInTheDocument();
    })
})

describe("Elsa Button", () => {
    test("Is the button rendered", () => {
        const onClick = jest.fn();
        
        render(<Button/>)

        expect(screen.getByTestId("button")).toBeInTheDocument();
        expect(onClick).toBeDefined();
    
    })
})