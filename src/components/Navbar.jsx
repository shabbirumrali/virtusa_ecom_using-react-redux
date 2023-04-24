import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice'

export default function App() {
  const { totalQuantity, cart } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart])
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/">
          <span className='navbar-brand'> ECommerce </span>
        </Link>
        <Link to="/">All Product</Link>
        <Link to="/cart">
          <button className='btn btn-warning'>Cart ({totalQuantity})</button>
        </Link>
      </div>
    </nav>
  );
}