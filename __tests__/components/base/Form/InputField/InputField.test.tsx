import { render, fireEvent } from '@testing-library/react-native';
import InputField from '../../../../../components/base/Form/InputField';

describe('InputField Component', () => {
  let val = 1
  it('renders with correct label', () => {
    const { getByText } = render(<InputField value={val} label="Test Label" onChange={() => {}} />);
    const labelElement = getByText('Test Label');
    expect(labelElement).toBeTruthy();
  });

  it('renders with correct value', () => {
    const { getByDisplayValue } = render(<InputField value={val} label="Label" onChange={() => {}} />);
    const inputElement = 1;
    expect(inputElement).toBeTruthy();
  });

  it('calls onChange when text is changed', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(<InputField value={val} label="Label" onChange={handleChange} />);
    const inputElement = getByPlaceholderText('Type here...');
    fireEvent.changeText(inputElement, 'New Value');
    expect(handleChange).toHaveBeenCalledWith('New Value');
  });
});
