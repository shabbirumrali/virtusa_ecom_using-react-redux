import { useForm } from 'react-hook-form'

const Shipping = ({ shippingData, shipping, setShipping, setShippingData }) => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm()

    const onSubmit = (data) => {
        setShippingData(data)
        setShipping(true)
        console.log("checking data", data)
        reset({
            first: '',
            last: '',
            number: '',
            pincode: '',
            address: '',
            area: '',
            landmark: '',
            additionalInformation: ''
        })
    }
    return (
        <>
            {shipping && (
                <>
                    <div className='alert alert-success' role="alert">
                        <p>Name: {shippingData.first} {shippingData.last}, contact: {shippingData.number}</p>
                        <p>Address: {shippingData.address}, {shippingData.area}, {shippingData.landmark}, {shippingData.pincode} (landmark: {shippingData.additionalInformation})</p>
                        <hr />
                        <p>Note: to edit the address please re-enter all the details correctly in the below form</p>
                    </div>
                    <hr />
                </>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* First name & Last name */}
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="first">First name*</label>
                            <input type="text" {...register("first", { required: true, message: 'Field should not be empty' })} id="first" placeholder='Enter first name here' className={`form-control ${errors.first?.type && 'error'}`} />
                        </div>
                        {errors.first?.type === 'required' && <p role="alert" className='error'>First name is required</p>}
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="last">Last Name*</label>
                            <input type="text" {...register("last", { required: true, message: 'Field should not be empty' })} id="last" placeholder='Enter first name here' className={`form-control ${errors.last?.type && 'error'}`} />
                        </div>
                        {errors.last?.type === 'required' && <p role="alert" className='error'>last name is required</p>}
                    </div>
                </div>
                
                {/* Phone Number & pincode */}
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="number">Phone Number*</label>
                            <input type="number" {...register("number", { required: true })} id="number" placeholder='Enter number here' className={`form-control ${errors.number?.type && 'error'}`} maxLength="10" />
                        </div>
                        {errors.number?.type === 'required' && <p role="alert" className='error'>Number is required</p>}
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="pincode">Pincode*</label>
                            <input type="number" {...register("pincode", {required: true })} maxLength="6" id="pincode" placeholder='Check for the pincode' className={`form-control ${errors.pincode?.type && 'error'}`} />
                        </div>
                        {errors.pincode?.type === 'required' && <p role="alert" className='error'>Pincode is required</p>}
                    </div>
                </div>

                {/* Address */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="address">Address* (Flat, House no., Building, Company, Apartment)</label>
                    <input type="text" {...register("address", { required: true })} id="address" placeholder='Address line 1, Address line 2' className={`form-control ${errors.address?.type && 'error'}`} />
                    {errors.address?.type === 'required' && <p role="alert" className='error'>Address is required</p>}
                </div>

                {/*  Area Street  */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="area">Area, Street, Sector, Village *</label>
                    <input type="text" {...register("area", { required: true })} id="area" placeholder='Ex: Gandhi Road' className={`form-control ${errors.area?.type && 'error'}`} />
                    {errors.area?.type === 'required' && <p role="alert" className='error'>Area is required</p>}
                </div>

                {/* Landmark  */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="landmark">Landmark* i.e (near chai point)</label>
                    <input type="text" {...register("landmark", { required: true })} id="landmark" placeholder='Ex: Treasure Mall' className={`form-control ${errors.landmark?.type && 'error'}`} />
                    {errors.landmark?.type === 'required' && <p role="alert" className='error'>Landmark is required</p>}

                </div>

                {/*  Message */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="additinal">Additional information</label>
                    <textarea {...register("additionalInformation")} className="form-control" id="additinal" placeholder='Add additional Message here' rows="4"></textarea>
                </div>

                {/*  Submit button  */}
                <button type="submit" className="btn btn-warning mb-4">Confirm order</button>
                
                <br />
            </form>
        </>
  )
}

export default Shipping