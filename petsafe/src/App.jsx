import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/Navbar';
import Register from '../src/components/Register';
import Login from '@/components/Login';
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import Dog from '@/components/Dog';
import Cat from '@/components/Cat';
import Roudents from '@/components/Roudents';
import UserProfile from '@/components/UserProfile';
import Admin from '@/components/Admin';
import EditarMascota from '@/components/Editarmascotas';
import ListaMascotas from '@/components/ListaMascotas';
import RegistroMascotas from '@/components/RegistroMascotas';
import { waitForFirebaseInit } from '../src/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const initializeFirebase = async () => {
      const { auth: initializedAuth } = await waitForFirebaseInit();
      onAuthStateChanged(initializedAuth, (user) => {
        if (user) {
          console.log('User is signed in:', user);
          setUser(user);
          setEmail(user.email);
        } else {
          console.log('User is signed out');
          setUser(null);
          setEmail('');
        }
      });
    };

    initializeFirebase();

    return () => {
      // Aquí puedes limpiar cualquier suscripción o recurso si es necesario
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <ToastContainer position="bottom-center" />
        <Navbar setUser={setUser} user={user} email={email} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/roudents" element={<Roudents />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Financing" element={<RegistroMascotas />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/ListaMascotas" element={<ListaMascotas />} />
          <Route exact path="/Mascotas/:id" element={<UserProfile />} />
          <Route path="/RegistroMascotas" element={<RegistroMascotas />} />
          <Route path="/editar/:id" element={<EditarMascota />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
