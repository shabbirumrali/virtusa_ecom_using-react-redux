import React from 'react'
import { useSelector } from 'react-redux'

const Invoice = ({ paymentDetail, shippingData }) => {
  const { totalQuantity, totalPrice } = useSelector(state => state.cart)
  return (
    <div className='invoice_desc'>
      <h1>Congratulations!</h1>
      <h2>your bill information</h2>

      <div className='details'>
        <div className='shipping_info'>
          <h3>Shipping Information</h3>
          <p> Name: {shippingData.name} </p>
          <p> Number: {shippingData.number}</p>
          <p> PinCode: {shippingData.pincode}</p>
          <p> PinCode: {shippingData.pincode}</p>
          <p> Address: {shippingData.address}</p>
          <p> Landmark: {shippingData.landmark}</p>
          <p> Additional Info: {shippingData.additionalInfo}</p>
        </div>
        <div className="payment_info">
          <h3>Payment Information</h3>
          <p> Name: {paymentDetail.cardHolderName} </p>
          <p>Total quanity: {totalQuantity}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>
    </div>
  )
}

export default Invoice