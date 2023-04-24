import { useSelector } from 'react-redux';
import { Navbar, ProductCards, CartPage, Checkout, Invoice } from './components';
import { Routes, Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ProductCards />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/invoice' element={<Invoice />} />
      </Routes>
    </div>
  );
}

export default App;
