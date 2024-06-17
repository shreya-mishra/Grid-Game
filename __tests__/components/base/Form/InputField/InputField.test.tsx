import { render, fireEvent } from '@testing-library/react-native';

describe('InputField Component', () => {
  it('renders with correct label', () => {
    const { getByText } = render(<InputField value="" label="Test Label" onChange={() => {}} />);
    const labelElement = getByText('Test Label');
    expect(labelElement).toBeTruthy();
  });

  it('renders with correct value', () => {
    const { getByDisplayValue } = render(<InputField value="Test Value" label="Label" onChange={() => {}} />);
    const inputElement = getByDisplayValue('Test Value');
    expect(inputElement).toBeTruthy();
  });

  it('calls onChange when text is changed', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(<InputField value="" label="Label" onChange={handleChange} />);
    const inputElement = getByPlaceholderText('Type here...');
    fireEvent.changeText(inputElement, 'New Value');
    expect(handleChange).toHaveBeenCalledWith('New Value');
  });
});
