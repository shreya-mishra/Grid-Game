import { render } from '@testing-library/react-native';
import App from '../App';

describe('<App />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('Open up App.js to start working on your app!')).toBeTruthy();
  });
});
