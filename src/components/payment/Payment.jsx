import React, { useState, useEffect } from 'react'

const Payment = ({ setPayment, setPaymentDetail }) => {
    const [cardNumber, setCardNumber] = useState('')
    const [cardHolderName, setCardHolderName] = useState('')
    const [expiration, setExpiration] = useState('')
    const [cvv, setCvv] = useState('')

    
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!cardNumber && !cardHolderName && !expiration && !cvv){
            return setErrorMessage("field is empty")
        }

        if(!cardNumber.match(/[0-9]{14}/g)) {
            return setErrorMessage("has to be number in the range of 14 digit")
        }
        if(!cardHolderName.match(/[a-zA-Z]/gi)){
            return setErrorMessage("Card Name should be in charecters")
        }

        setPaymentDetail({
            cardNumber,
            cardHolderName,
            expiration,
            cvv
        })
        setPayment(true)
        console.log('check')
    }

    setTimeout(() => {
        setErrorMessage('')
    }, 3000)

    return (
    <section class="gradient-custom">
        <div class="container">
            <div class="row d-flex justify-content-center py-5">
                <div class="col-md-7 col-lg-5 col-xl-4">
                    <div class="card" style={{borderRadius: "15px"}}>
                        <div class="card-body p-4">
                            <form onSubmit={handleSubmit}>
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <div class="form-outline">
                                    <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} id="typeText" class="form-control border form-control-lg"
                                        placeholder="1234 5678 9012 3457" maxlength="14"/>
                                    <label class="form-label" for="typeText">Card Number</label>
                                    </div>
                                    <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" width="64px" />
                                </div>

                                <div class="d-flex justify-content-between align-items-center mb-4">
                                    <div class="form-outline">
                                    <input type="text" id="typeName" value={cardHolderName} onChange={e => setCardHolderName(e.target.value)} class="form-control border form-control-lg" size="17"
                                        placeholder="Cardholder's Name" />
                                    <label class="form-label" for="typeName">Cardholder's Name</label>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-between align-items-center pb-2">
                                    <div class="form-outline">
                                    <input type="date" value={expiration} onChange={e => setExpiration(e.target.value)} class="form-control border form-control-lg" placeholder="MM/YYYY"
                                        size="7" minlength="7" maxlength="7" />
                                    <label class="form-label" for="typeExp">Expiration</label>
                                    </div>
                                    <div class="form-outline">
                                    <input type="password" value={cvv} onChange={e => setCvv(e.target.value)} id="typeText2" class="border form-control form-control-lg"
                                        placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                    <label class="form-label" for="typeText2">Cvv</label>
                                    </div>
                                    <button type="submit" class="btn btn-info btn-lg btn-rounded">
                                    <i class="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {errorMessage && (
                <div className="error">{errorMessage}</div>
            )}
        </div>
    </section>
  )
}

export default Payment