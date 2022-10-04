/** @jest-environment jsdom */
import App from "../../App";

const ReactTestRenderer = require('react-test-renderer');
/*
* A snapshot test is a useful tool when we want to make sure our ui does not change unexpectedly.
* The way it works is that the first time it runs, it creates a snapshot of the output of the <App/> component parsed to JSON.
* For future runs, it compares the output to our reference which we created earlier to make sure our UI did not change.
* */

describe("The snapshot", () => {
    it('matches the reference', () => {
        const tree = ReactTestRenderer
            .create(<App />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

})
