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
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className='text-decoration-none'>
          <span className='navbar-brand'>ECommerce</span>
        </Link>
        <Link to="/" className='text-decoration-none'>
          <h6>All Product</h6>
        </Link>
        <Link to="/cart">
          <button className='btn btn-warning btn-sm'>Cart ({totalQuantity})</button>
        </Link>
      </div>
    </nav>
  );
}