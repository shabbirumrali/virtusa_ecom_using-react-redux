import React, { useState } from 'react'

const Shipping = ({ setShipping, setShippingData }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [pincode, setPincode] = useState('')
    const [address, setAddress] = useState('')
    const [area, setArea] = useState('')
    const [landmark, setLandmark] = useState('')
    const [additionalInfo, setAdditionalInfo] = useState('')

    const [errorMessage1, setErrorMessage1] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name && !number && !pincode && !address && !area && !landmark && !additionalInfo) {
            return setErrorMessage1('Fields should not be empty')
        }
        if(number.length < 10) {
            return setErrorMessage1('number must in of 10 digit')
        }

        setShippingData({
            name,
            number,
            pincode,
            address,
            area,
            landmark,
            additionalInfo
        })
        setShipping(true)

        setName('')
        setNumber('')
        setPincode('')
        setAddress('')
        setArea('')
        setLandmark('')
        setAdditionalInfo('')
        console.log("shipping data")
    }
    setTimeout(() => {
        setErrorMessage1('')
    }, 3000)

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="first" value={name} onChange={(e) => setName(e.target.value)} className="form-control border" />
                            <label className="form-label" for="first">First & Last name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="last" value={number} onChange={(e) => setNumber(e.target.value)} className="form-control border" maxlength="10" />
                            <label className="form-label" for="last">Mobile Number</label>
                        </div>
                    </div>
                </div>

                {/* Text input  */}
                <div className="form-outline mb-4">
                    <input type="number" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} className="form-control border" />
                    <label className="form-label" for="pincode">Pincode</label>
                </div>

                {/* Text input */}
                <div className="form-outline mb-4">
                    <input type="text" id="address" value={address} onChange={e => setAddress(e.target.value)} className="form-control border" />
                    <label className="form-label" for="address">Address (Flat, House no., Building, Company, Apartment)</label>
                </div>

                {/*  Email input  */}
                <div className="form-outline mb-4">
                    <input type="text" id="area" value={area} onChange={e => setArea(e.target.value)} className="form-control border" />
                    <label className="form-label" for="area">Area, Street, Sector, Village</label>
                </div>

                {/* Number input  */}
                <div className="form-outline mb-4">
                    <input type="text" id="landmark" value={landmark} onChange={e => setLandmark(e.target.value)} className="form-control border" />
                    <label className="form-label" for="landmark">Landmark i.e (near chai point)</label>
                </div>

                {/*  Message input */}
                <div className="form-outline mb-4">
                    <textarea className="form-control border" id="additinal" value={additionalInfo} onChange={e => setAdditionalInfo(e.target.value)} rows="4"></textarea>
                    <label className="form-label" for="additinal">Additional information</label>
                </div>

                {/*  Submit button  */}
                <button type="submit" className="btn btn-primary btn-block mb-4">Confirm order</button>
                {errorMessage1 && (
                    <div className="error">{errorMessage1}</div>
                )}
                <br />
            </form>
        </>
  )
}

export default Shipping