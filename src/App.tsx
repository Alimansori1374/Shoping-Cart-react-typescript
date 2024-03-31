// import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import {Store} from './pages/Store';
import Aboute from './pages/Aboute';

import { Container } from 'react-bootstrap';
import { Navbar } from './components/Navbar';


import {  ShoppingCartProvider } from './context/ShoppingCartContext.tsx'; 

const App = () => {
  return (
    <ShoppingCartProvider>
    <Navbar />
    <Container className='mb-4'>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Store />} />
          <Route path="/Aboute" element={<Aboute />} />
        </Routes>
    </Container>

    </ShoppingCartProvider>
  );
};



export default App;
