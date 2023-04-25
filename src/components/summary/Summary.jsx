import React from 'react'
import { useSelector } from 'react-redux'

const Summary = () => {
  const {cart, totalQuantity, totalPrice} = useSelector(state => state.cart)

  return (
   <>
        <div className="card">
            <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
                <ol style={{ padding: '0' }}>
                    {cart && cart.map(item => (
                        <li className='billing_item border m-1 p-2' key={item.id}>
                            <img src={item.img} style={{ width: '70px' }} />
                            <div className='item_detail'>
                                <h6>{item.title}</h6>
                                <p>Quantity <strong>{item.quantity}</strong></p>
                                <p>Price: <strong>${item.price * item.quantity}</strong></p>
                            </div>
                        </li>
                    ))}
                </ol>
                <hr />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"> Total Products price
                        <span>${totalPrice}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"> Total Quantity
                        <span>{totalQuantity}</span>
                    </li>
                    <hr />
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div> <strong>Amount to be paid in USD</strong></div>
                        <span><strong>${totalPrice}</strong></span>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Summary