import React from 'react'
import { useSelector } from 'react-redux'

const Invoice = ({ paymentDetail, shippingData }) => {
  const { totalQuantity, totalPrice } = useSelector(state => state.cart)
  return (
    <div className='invoice_desc'>
      <h1 className='text-center'>Congratulations!</h1>
      <h6 className='text-center'>your bill information</h6>

      <div className='details border p-5 my-3'>
        <div className='shipping_info'>
          <h3>Shipping Information</h3>
          <hr />
          <p> Name: <strong>{shippingData.first} {shippingData.last}</strong></p>
          <p> Number: <strong>{shippingData.number}</strong></p>
          <p> PinCode: <strong>{shippingData.pincode}</strong></p>
          <p> Address: <strong>{shippingData.address}</strong></p>
          <p> Landmark: <strong>{shippingData.landmark}</strong></p>
          <p> Additional Info: <strong>{shippingData.additionalInfo}</strong></p>
        </div>
        <div className="payment_info">
          <h3>Payment Information</h3>
          <hr />
          <p>Payment By: <strong>{paymentDetail.cardHolderName}</strong> </p>
          <p>Item Purchased: <strong>{totalQuantity}</strong></p>
          <p>Total Price: <strong>{totalPrice}</strong></p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Invoice