import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Cart from './components/Modal/Cart.js';

function App() {
  const [cartIsShown, setCartIsShown] = useState(true)

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
