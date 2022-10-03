import {
    cleanup,
    fireEvent,
    getByTestId,
    render,
    screen
} from "@testing-library/react";
import InputForm from "../../components/Forms/InputForm";
import '@testing-library/jest-dom'

/**
 * Before each test we render the form.
 */
beforeEach(() => {
    render(
        <InputForm/>);
});

/**
 * After each test we clean up
 */
afterEach(() => {
    cleanup()
});