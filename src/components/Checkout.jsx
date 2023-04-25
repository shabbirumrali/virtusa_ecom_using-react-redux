import React, {useState } from 'react';
import Shipping from './shipping/Shipping';
import Payment from './payment/Payment';
import Invoice from './invoice/Invoice';
import Billing from './billing/Billing';
import Summary from './summary/Summary'
import { Link } from 'react-router-dom'

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
    <>
    <div className='row m-5' style={{ display: (shipping && payment) ? 'none': 'd-flex' }}>

      <div class="accordion col-7" id="shipping">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Shipping Information
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <Shipping shippingData={shippingData} shipping={shipping} setShipping={setShipping} setShippingData={setShippingData} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Billing Billing
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
              <Billing shippingData={shippingData} shipping={shipping} setShipping={setShipping} setShippingData={setShippingData} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Payment
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div class="accordion-body">
              <Payment setPayment={setPayment} setPaymentDetail={setPaymentDetail} />
            </div>
          </div>
        </div>
      </div>

      <div className='sidebar col-5'>
          <Summary />
      </div>
    </div>

      {(shipping && payment) && (
          <div className='invoice_container'>
            <div className='inner_layout'>
              <Invoice paymentDetail={paymentDetail} shippingData={shippingData} />
              <Link to="/" className='btn btn-light' onClick={handlePage} >Back to main Page</Link>
            </div>
          </div>
        )}
    </>
  );
}
export default Checkout;