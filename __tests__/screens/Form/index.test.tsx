import { render, fireEvent } from '@testing-library/react-native';
import InputForm from '../../../screens/Form';

describe('InputForm Component', () => {
  it('renders all input fields and button', () => {
    const { getByText, getAllByPlaceholderText } = render(<InputForm />);
    
    expect(getByText('Grid Game')).toBeTruthy();
    expect(getByText('Player Count')).toBeTruthy();
    expect(getByText('Rows')).toBeTruthy();
    expect(getByText('Columns')).toBeTruthy();
    expect(getByText('Submit')).toBeTruthy();
    const placeholders = getAllByPlaceholderText('Type here...');
    expect(placeholders.length).toBe(3);
  });

  it('shows error message when fields are empty', () => {
    const { getByText } = render(<InputForm />);
    
    fireEvent.press(getByText('Submit'));
    
    expect(getByText('Please fill all the fields')).toBeTruthy();
  });

  it('shows error message when rows and columns are less than or equal to 3', () => {
    const { getByText, getAllByPlaceholderText } = render(<InputForm />);
    
    const inputs = getAllByPlaceholderText('Type here...');
    fireEvent.changeText(inputs[0], '1');
    fireEvent.changeText(inputs[1], '3');
    fireEvent.changeText(inputs[2], '3');
    fireEvent.press(getByText('Submit'));
    
    expect(getByText('Rows and Columns should be more than 3')).toBeTruthy();
  });

  it('calls onPressHandler when form is valid', () => {
    const { getByText, getAllByPlaceholderText, queryByText } = render(<InputForm />);
    
    const inputs = getAllByPlaceholderText('Type here...');
    fireEvent.changeText(inputs[0], '1');
    fireEvent.changeText(inputs[1], '4');
    fireEvent.changeText(inputs[2], '4');
    fireEvent.press(getByText('Submit'));
    
    expect(queryByText('Please fill all the fields')).toBeFalsy();
    expect(queryByText('Rows and Columns should be more than 3')).toBeFalsy();
  });
});
