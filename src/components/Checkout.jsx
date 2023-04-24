import React, {useState } from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import Shipping from './shipping/Shipping';
import Payment from './payment/Payment';
import Invoice from './invoice/Invoice';
import { Link, redirect } from 'react-router-dom'

const Checkout = () => {
  const [paymentDetail, setPaymentDetail] = useState('')
  const [shippingData, setShippingData] = useState('')
  const [shipping, setShipping] = useState(false)
  const [payment, setPayment] = useState(false)
  console.log("payment Data: ", paymentDetail)
  console.log("Shipping  Data: ", shippingData)
  
  const handlePage = () => {
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }
  return (
    <MDBAccordion borderless initialActive={1}>
        <>
          <MDBAccordionItem collapseId={1} headerTitle='Shipping/Billing Details'>
            {/* Shipping component */}
            <Shipping setShipping={setShipping} setShippingData={setShippingData} />
          </MDBAccordionItem>
          <br />
          <MDBAccordionItem collapseId={2} headerTitle='Payment'>
            {/* Payment Details */}
            <Payment setPayment={setPayment} setPaymentDetail={setPaymentDetail} />
          </MDBAccordionItem>
        </>
      { shipping && payment && (
        <div className='invoice_container'>
          <div className='inner_layout'>
            <Invoice paymentDetail={paymentDetail} shippingData={shippingData} />
            <Link to="/" onClick={handlePage} >Back to main Page</Link>
          </div>
        </div>
      )}
    </MDBAccordion>
  );
}
export default Checkout;