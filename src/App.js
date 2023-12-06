import './App.css';
import MainProduct from './features/products/MainProduct';
import Cart from './features/cart/Cart';
import { useState } from 'react';
import SingleProduct from './features/products/SingleProduct';
import Checkout from './features/checkout/Checkout';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (
    <>
    <Header></Header>
    <div className="container">
      <Routes>
          <Route path='/' element={<MainProduct />}>  </Route>
          <Route path='/cart' element={<Cart />}>  </Route>
          <Route path='/product/:id' element={<SingleProduct />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
