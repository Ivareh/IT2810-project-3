
import InputForm from "../../components/Forms/InputForm";
const ReactTestRenderer = require('react-test-renderer');
// Snapshot testing makes sure our UI does not change unexpectedly.

it('renders correctly', () => {
    const tree = ReactTestRenderer
        .create(<InputForm/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});