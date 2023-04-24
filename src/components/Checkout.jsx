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
    }, 0)
  }
  return (
    <div className='col-10'>
      <div className="accordion" id="shipping">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Shipping/Billing Details
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#shipping">
            <div className="accordion-body">
              <Shipping setShipping={setShipping} setShippingData={setShippingData} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Payment
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#shipping">
            <div className="accordion-body">
              <Payment setPayment={setPayment} setPaymentDetail={setPaymentDetail} />
            </div>
          </div>
        </div>
      </div>
      {shipping && payment && (
          <div className='invoice_container'>
            <div className='inner_layout'>
              <Invoice paymentDetail={paymentDetail} shippingData={shippingData} />
              <Link to="/" onClick={handlePage} >Back to main Page</Link>
            </div>
          </div>
        )}
      {/* <MDBAccordion borderless initialActive={1}>
          <>
            <MDBAccordionItem collapseId={1} headerTitle='Shipping/Billing Details'>
              <Shipping setShipping={setShipping} setShippingData={setShippingData} />
            </MDBAccordionItem>
            <br />
            <MDBAccordionItem collapseId={2} headerTitle='Payment'>
              <Payment setPayment={setPayment} setPaymentDetail={setPaymentDetail} />
            </MDBAccordionItem>
          </> 
        
      </MDBAccordion> */}
    </div>
  );
}
export default Checkout;