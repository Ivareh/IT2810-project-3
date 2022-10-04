/** @jest-environment jsdom */
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import InputForm from "../../components/forms/InputForm";
import '@testing-library/jest-dom'


/**
 * Before each test we render the form.
 */
beforeEach(() => {
    // Clear local storage
    localStorage.removeItem('commits')
    localStorage.removeItem('issues')
    render(
        <InputForm />);
});

/**
 * After each test we clean up
 */
afterEach(() => {
    cleanup()
});


test("Check if inputs are being rendered", () => {
    const button = screen.getByTestId("get")
    const domain = screen.getByTestId("domain")
    const token = screen.getByTestId("token")
    const id = screen.getByTestId("gitlab-id")

    expect(button).toBeInTheDocument()
    expect(domain).toBeInTheDocument()
    expect(token).toBeInTheDocument()
    expect(id).toBeInTheDocument()
})
test("Check if the original state is being displayed", () => {
    const searchBar = screen.getByTestId('domain') as HTMLInputElement
    const token = screen.getByTestId("token") as HTMLInputElement
    const id = screen.getByTestId("gitlab-id") as HTMLInputElement
    expect(searchBar.value).toBe("https://gitlab.stud.idi.ntnu.no/api/v4/projects/")
    expect(token.value).toBe("glpat-2vnnyXYGFDt9YKYu5QYW")
    expect(id.value).toBe("17598")
})

test("If we can change the values of the form", () => {
    const searchBar = screen.getByTestId('domain') as HTMLInputElement
    fireEvent.change(searchBar, { target: { value: "123dab123" } });
    expect(searchBar.value).toBe("123dab123")
})
