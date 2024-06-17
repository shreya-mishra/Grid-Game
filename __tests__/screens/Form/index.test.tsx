import { render, fireEvent, screen } from '@testing-library/react-native';

describe('InputForm Component', () => {
  test('renders all input fields and button', () => {
    render(<InputForm />);
    
    expect(screen.getByText('Player Count')).toBeTruthy();
    expect(screen.getByText('Rows')).toBeTruthy();
    expect(screen.getByText('Columns')).toBeTruthy();
    expect(screen.getByText('Submit')).toBeTruthy();
  });

  test('shows error message when fields are empty', () => {
    render(<InputForm />);
    
    fireEvent.press(screen.getByText('Submit'));
    
    expect(screen.getByText('Please fill all the fields')).toBeTruthy();
  });

  test('shows error message when rows and columns are less than or equal to 3', () => {
    render(<InputForm />);
    
    fireEvent.changeText(screen.getByLabelText('Player Count'), '1');
    fireEvent.changeText(screen.getByLabelText('Rows'), '3');
    fireEvent.changeText(screen.getByLabelText('Columns'), '3');
    fireEvent.press(screen.getByText('Submit'));
    
    expect(screen.getByText('Rows and Columns should be more than 3')).toBeTruthy();
  });

  test('calls onPressHandler when form is valid', () => {
    render(<InputForm />);
    
    fireEvent.changeText(screen.getByLabelText('Player Count'), '1');
    fireEvent.changeText(screen.getByLabelText('Rows'), '4');
    fireEvent.changeText(screen.getByLabelText('Columns'), '4');
    fireEvent.press(screen.getByText('Submit'));
    
    expect(screen.queryByText('Please fill all the fields')).toBeFalsy();
    expect(screen.queryByText('Rows and Columns should be more than 3')).toBeFalsy();
  });
});
