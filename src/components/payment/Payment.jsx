import React, { useState } from 'react'
import visaImage from '../../assets/image/visa.png'

const Payment = ({ setPayment, setPaymentDetail }) => {
    const [cardNumber, setCardNumber] = useState('')
    const [cardHolderName, setCardHolderName] = useState('')
    const [expiration, setExpiration] = useState('')
    const [cvv, setCvv] = useState('')

    // Error Messages
    const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState('')
    const [cardHolderNameErrorMessage, setCardHolderNameErrorMessage] = useState('')
    const [expirationErrorMessage, setExpirationErrorMessage] = useState('')
    const [cvvErrorMessage, setCvvErrorMessage] = useState('')

    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!cardNumber) return setCardNumberErrorMessage('Card number field is required')             
        if(!cardHolderName) return setCardHolderNameErrorMessage('Card holder name field is required')
        if(!expiration) return setExpirationErrorMessage('Expiration date is required')        
        if(!cvv) return setCvvErrorMessage('CVV number field should not be empty')

        if(!cardNumber.match(/[0-9]{14}/g)) return setCardNumberErrorMessage("contains number in the range of 14 digit")
        if(!cardHolderName.match(/[a-zA-Z]/gi)) return setCardHolderNameErrorMessage("Card Name should be in charecters")        

        setPaymentDetail({
            cardNumber,
            cardHolderName,
            expiration,
            cvv
        })
        setPayment(true)
        console.log('check')
    }

  return (
    <section className="gradient-custom">
        <div className="container">
            <div className="row d-flex justify-content-center py-5">
                <div className="col-md-7">
                    <div className="card" style={{borderRadius: "15px"}}>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="form-outline">
                                        <label className="form-label text-left" htmlFor="typeText">Card Number</label>
                                        <input type="text" value={cardNumber} 
                                            onChange={(e) => {
                                                setCardNumber(e.target.value)
                                                setCardNumberErrorMessage('')
                                            }} 
                                            id="typeText" className={`form-control form-control-lg ${cardNumberErrorMessage && 'error'}`}
                                        placeholder="1234 5678 9012 3457" maxLength="14"/>
                                        {cardNumberErrorMessage && <span className='error'>{cardNumberErrorMessage}</span>}
                                    </div>
                                    <img src={visaImage} alt="visa" width="64px" />
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                                        <input type="text" id="typeName" value={cardHolderName} onChange={e => {
                                            setCardHolderName(e.target.value)
                                            setCardHolderNameErrorMessage('')
                                        }} 
                                        className={`form-control form-control-lg ${cardHolderNameErrorMessage && 'error'}`} size="17"
                                        placeholder="Cardholder's Name" />
                                        {cardHolderNameErrorMessage && <span className='error'>{cardHolderNameErrorMessage}</span>}
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pb-2">
                                        <div className="form-outline">
                                        <label className="form-label" htmlFor="typeExp">Expiration</label>
                                        <input type="month" value={expiration} onChange={e => {
                                            setExpiration(e.target.value)
                                            setExpirationErrorMessage('')
                                        }} 
                                        className={`form-control form-control-lg ${expirationErrorMessage && 'error'}`} placeholder="MM/YYYY"
                                        size="7" minLength="7" maxLength="7" />
                                        {expirationErrorMessage && <span className='error'>{expirationErrorMessage}</span>}
                                    </div>
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="typeText2">CVV</label>
                                        <input type="password" value={cvv} onChange={e => {
                                            setCvv(e.target.value)
                                            setCvvErrorMessage('')
                                            }} 
                                            id="typeText2" className={`form-control form-control-lg ${cvvErrorMessage && 'error'}`}
                                        placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                                        {cvvErrorMessage && <span className='error'>{cvvErrorMessage}</span>}
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-warning btn-lg btn-rounded">
                                    Enter
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Payment