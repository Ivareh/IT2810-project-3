/** @jest-environment jsdom */
import App from "../../App";
const ReactTestRenderer = require('react-test-renderer');
// Snapshot testing makes sure our UI does not change unexpectedly.
// Simply takes a snapshot of the output of the component which is then
// compared to future versions to make sure the ui did not change.


describe("Snapshot testing", () => {
    it('renders correctly', () => {
        const tree = ReactTestRenderer
            .create(<App/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

})
