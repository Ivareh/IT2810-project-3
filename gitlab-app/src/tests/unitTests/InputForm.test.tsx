import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import InputForm from "../../components/Forms/InputForm";
import '@testing-library/jest-dom'


beforeEach(() => {
    render(
        <InputForm/>);
});

afterEach(() => {
    cleanup()
});


test("Check if inputs are being rendered", () => {
    const button = screen.getByTestId("get")
    const searchBar = screen.getByTestId("domain")
    expect(button).toBeInTheDocument()
    expect(searchBar).toBeInTheDocument()
    fireEvent.click(button);
})

test("Check if value is correct", () => {
    const searchBar = screen.getByTestId("domain").title
    expect(searchBar.valueOf()).toHaveTextContent("1")
})