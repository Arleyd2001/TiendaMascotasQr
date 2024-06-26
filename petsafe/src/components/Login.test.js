import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { uid: '123' } })),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock('./Loader', () => () => <div>Loading...</div>);

test('renders Login component', () => {
  render(<Login />);
  expect(screen.getByText('Inicio de Sesion')).toBeInTheDocument();
});

test('allows user to log in', async () => {
  render(<Login />);
  fireEvent.change(screen.getByPlaceholderText('Correo'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'password' } });
  fireEvent.click(screen.getByText('Ingresar'));
  expect(await screen.findByText('Loading...')).toBeInTheDocument();
});
