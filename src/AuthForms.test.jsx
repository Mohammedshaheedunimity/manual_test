import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Login, Signup } from './AuthForms';

describe('AuthForms', () => {
  test('Login form submits email and password', () => {
    const onLogin = jest.fn();
    render(<Login onLogin={onLogin} />);
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText(/login/i));
    expect(onLogin).toHaveBeenCalledWith('test@example.com', 'password123');
  });

  test('Signup form submits email and password', () => {
    const onSignup = jest.fn();
    render(<Signup onSignup={onSignup} />);
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'new@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'newpass' } });
    fireEvent.click(screen.getByText(/sign up/i));
    expect(onSignup).toHaveBeenCalledWith('new@example.com', 'newpass');
  });
});
