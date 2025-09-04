import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Login } from './AuthForms';

const mockOnLogin = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

it('navigates to home screen on successful login', () => {
  render(
    <MemoryRouter>
      <Login onLogin={mockOnLogin} />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'test@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText('Password'), {
    target: { value: 'password123' },
  });
  fireEvent.click(screen.getByRole('button', { name: 'Login' }));

  expect(mockOnLogin).toHaveBeenCalledWith('test@example.com', 'password123');
  expect(mockNavigate).toHaveBeenCalledWith('/home');
});
