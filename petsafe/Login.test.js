import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Mock de funciones y objetos necesarios
jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
}));

// Mock de useHistory de react-router-dom
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

// Mock de react-toastify
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('Login Component', () => {
  // Limpiar mocks después de cada prueba
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('iniciar sesión exitoso', async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    // Simular entrada de datos en los campos de correo y contraseña
    fireEvent.change(getByPlaceholderText('Correo'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByPlaceholderText('Contraseña'), { target: { value: 'password123' } });

    // Simular clic en el botón de iniciar sesión
    fireEvent.click(getByText('Ingresar'));

    // Esperar a que se llame a signInWithEmailAndPassword y resolver la promesa
    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalled();
    });

    // Verificar que se haya llamado toast.success con el mensaje correcto
    expect(toast.success).toHaveBeenCalledWith('Inicio de sesion exitoso');
  });

  it('error al iniciar sesión', async () => {
    signInWithEmailAndPassword.mockRejectedValueOnce(new Error('Correo o contraseña incorrectos'));

    const { getByPlaceholderText, getByText } = render(<Login />);

    // Simular entrada de datos en los campos de correo y contraseña
    fireEvent.change(getByPlaceholderText('Correo'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByPlaceholderText('Contraseña'), { target: { value: 'password123' } });

    // Simular clic en el botón de iniciar sesión
    fireEvent.click(getByText('Ingresar'));

    // Esperar a que se llame a signInWithEmailAndPassword y resolver la promesa
    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalled();
    });

    // Verificar que se haya llamado toast.error con el mensaje de error correcto
    expect(toast.error).toHaveBeenCalledWith('Correo o contraseña incorrectos');
  });
});
