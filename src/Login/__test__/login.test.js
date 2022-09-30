import { render, screen } from '@testing-library/react';
import Login from '../Login';

test('should show login form', () => {
    render(<Login />)
    const input = screen.getByLabelText('Username')
    // console.log(input)
    expect(input).toBeInTheDocument();

  })