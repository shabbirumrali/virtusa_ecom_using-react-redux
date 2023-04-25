import React, { useState, useEffect } from 'react'

const Shipping = ({ shippingData, shipping, setShipping, setShippingData }) => {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [number, setNumber] = useState('')
    const [pincode, setPincode] = useState('')
    const [address, setAddress] = useState('')
    const [area, setArea] = useState('')
    const [landmark, setLandmark] = useState('')
    const [additionalInfo, setAdditionalInfo] = useState('')

    const [errorMessage1, setErrorMessage1] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!first && !last && !number && !pincode && !address && !area && !landmark && !additionalInfo) {
            return setErrorMessage1('Fields should not be empty')
        }
        if(number.length !== 10) {
            return setErrorMessage1('number must in of 10 digit')
        }
        if(pincode.length !== 6) {
            return setErrorMessage1('number must in of 6 digit')
        }
        setShippingData({
            first,
            last,
            number,
            pincode,
            address,
            area,
            landmark,
            additionalInfo
        })
        
        setFirst('')
        setLast('')
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

    useEffect(() => {
        if(shippingData) {
            setShipping(true)
        }
    }, [shippingData])
    return (
        <>
            {errorMessage1 && (
                <div className="error">{errorMessage1}</div>
            )}
            {shipping && (
                <>
                    <div className='alert alert-light' role="alert">
                        <p>Name: {shippingData.first} {shippingData.last}, contact: {shippingData.number}</p>
                        <p>Address: {shippingData.address}, {shippingData.area}, {shippingData.landmark}, {shippingData.pincode} </p>
                        {shippingData.additionalInfo}
                        <hr />
                        <p>Note: to edit the address please re-enter all the details correctly in the below form</p>
                    </div>
                    <hr />
                </>
            )}
            <form onSubmit={handleSubmit}>
                {/* 2 column grid layout with text inputs for the first and last names */}
                
                {/* First name & Last name */}
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="first">First name</label>
                            <input type="text" id="first" value={first} placeholder='Enter first name here' onChange={(e) => setFirst(e.target.value)} className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="last">Last Name</label>
                            <input type="text" id="last" value={last} placeholder='Enter first name here' onChange={(e) => setLast(e.target.value)} className="form-control" />
                        </div>
                    </div>
                </div>
                
                {/* Phone Number & pincode */}
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="number">Phone Number</label>
                            <input type="number" id="number" placeholder='Enter number here' value={number} onChange={(e) => setNumber(e.target.value)} className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="pincode">Pincode</label>
                            <input type="number" id="pincode" placeholder='Check for the pincode' value={pincode} onChange={(e) => setPincode(e.target.value)} className="form-control" maxlength="10" />
                        </div>
                    </div>
                </div>

                {/* Address */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="address">Address (Flat, House no., Building, Company, Apartment)</label>
                    <input type="text" id="address" placeholder='Address line 1, Address line 2' value={address} onChange={e => setAddress(e.target.value)} className="form-control" />
                </div>

                {/*  Area Street  */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="area">Area, Street, Sector, Village</label>
                    <input type="text" id="area" placeholder='Ex: Gandhi Road' value={area} onChange={e => setArea(e.target.value)} className="form-control" />
                </div>

                {/* Landmark  */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="landmark">Landmark i.e (near chai point)</label>
                    <input type="text" id="landmark" placeholder='Ex: Treasure Mall' value={landmark} onChange={e => setLandmark(e.target.value)} className="form-control" />
                </div>

                {/*  Message */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="additinal">Additional information</label>
                    <textarea className="form-control" id="additinal" value={additionalInfo} onChange={e => setAdditionalInfo(e.target.value)} placeholder='Add additional Message here' rows="4"></textarea>
                </div>

                {/*  Submit button  */}
                <button type="submit" className="btn btn-warning mb-4">Confirm order</button>
                
                <br />
            </form>
        </>
  )
}

export default Shipping