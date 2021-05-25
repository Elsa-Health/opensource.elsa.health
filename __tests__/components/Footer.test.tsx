// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import Footer from "../../components/Footer";

describe("Footer test", () =>{
    test ("Footer is rendered", () =>{
        render(<Footer/>)

        expect(screen.getByTestId("footer")).toBeInTheDocument();
    })
})

// describe("Test the Year Function", () =>{
//     test("Is the correct year rendered", () => {
        
//     })
// })