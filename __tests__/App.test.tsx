import { render } from '@testing-library/react-native';
import App from '../App';
import InputForm from '../screens/Form';

describe('<App />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<InputForm />);
    expect(getByText('Grid Game')).toBeTruthy();
  });
});
