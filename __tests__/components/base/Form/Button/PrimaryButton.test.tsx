import { render, fireEvent } from '@testing-library/react-native';
import PrimaryButton from '../../../../../components/base/Form/Button/PrimaryButton';

describe('PrimaryButton Component', () => {
  test('renders with correct title', () => {
    const { getByText } = render(<PrimaryButton disabled={false} title="Click Me" onPress={() => {}} />);
    const buttonText = getByText('Click Me');
    expect(buttonText).toBeTruthy();
  });

  test('calls onPress when pressed', () => {
    const handlePress = jest.fn();
    const { getByText } = render(<PrimaryButton disabled={false} title="Click Me" onPress={handlePress} />);
    const buttonElement = getByText('Click Me');
    fireEvent.press(buttonElement);
    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  test('does not call onPress when disabled', () => {
    const handlePress = jest.fn();
    const { getByText } = render(<PrimaryButton disabled={true} title="Click Me" onPress={handlePress} />);
    const buttonElement = getByText('Click Me');
    fireEvent.press(buttonElement);
    expect(handlePress).not.toHaveBeenCalled();
  });
});
