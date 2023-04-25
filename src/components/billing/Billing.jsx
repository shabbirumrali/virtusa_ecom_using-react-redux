import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Billing = () => {
  const {cart, totalQuantity, totalPrice} = useSelector(state => state.cart)
  return (
    <div className='billing container'>
        <ol>
            {cart && cart.map(item => (
                <li className='billing_item my-3' key={item.id}>
                    <img src={item.img} />
                    <div className='item_detail'>
                        <h5>{item.title}</h5>
                        <p>Quantity <strong>{item.quantity}</strong></p>
                        <p>Price: <strong>${item.price * item.quantity}</strong></p>
                    </div>
                </li>
            ))}
            <button className='btn btn-secondary'>Total quantity: {totalQuantity} <br />
                Total Price to Pay: ${totalPrice}
            </button>
        </ol>
        <Link className='btn btn-warning' to="/">Edit Item</Link>
    </div>
  )
}

export default Billing