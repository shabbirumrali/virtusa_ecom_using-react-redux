import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartTotal, removeItem, decreaseItemQuantity, increaseItemQuantity } from '../features/cartSlice'

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getCartTotal())
  }, [cart])
  return (
    <div>
        <section className="h-100 gradient-custom">
            <div className="container py-5">
                <div className="row d-flex justify-content-center my-4">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Cart - {cart.length} items</h5>
                            </div>
                            <div className="card-body">
                                {/* Single item  */}
                                {cart && cart.map(cartItem => (
                                    <div key={cartItem.id} className="row my-3">
                                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                            {/*  Image  */}
                                            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                <img src={cartItem.img} className="w-100" alt={cartItem.title} />
                                            </div>                                            
                                        </div>
                                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                            {/* Title Description */}
                                            <h3><strong>{ cartItem.title }</strong></h3>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis blanditiis</p>
                                            <p><strong>Price: ${ cartItem.price }</strong></p>
                                            {/* Delete button */}
                                            <button type="button" onClick={() => dispatch(removeItem(cartItem.id))} className="btn btn-danger btn-sm mb-3">
                                                Remove
                                            </button>
                                        </div>

                                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                            {/* Quantity  */}
                                            { cartItem.quantity > 0 ? (
                                                <>
                                                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>                
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="form1">  Quantity </label>
                                                            <div className='d-flex border rounded'>
                                                                <span className='btn mx-2' onClick={() => dispatch(decreaseItemQuantity(cartItem.id))}>-</span>
                                                                <input type="number" placeholder='quantity' id="form1" min="0" name="quantity" value={cartItem.quantity} className="form-control ml-2 border-0" />
                                                                <span className='btn mx-2' onClick={() => dispatch(increaseItemQuantity(cartItem.id))}>+</span>
                                                            </div>
                                                        </div>
                                                        <br />
                                                    </div>
                                                    <p className="text-start text-md-center">
                                                        <span>{cartItem.quantity} for </span>
                                                        <strong>${cartItem.quantity * cartItem.price}</strong>
                                                    </p>
                                                </>
                                            ):(
                                                <button className="btn btn-danger"
                                                    onClick={() => dispatch(increaseItemQuantity(cartItem.id))}>
                                                    Add Value to the Cart
                                                </button>
                                             )}
                                        </div>
                                        <hr />                            
                                    </div>
                                ))}
                                {totalQuantity !== 0 && (
                                    <>
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <p><strong>Expected shipping delivery</strong></p>
                                                <p className="mb-0">12.04.2020 - 14.04.2024</p>
                                            </div>
                                        </div>
                                        <div className="card mb-4 mb-lg-0">
                                            <div className="card-body">
                                                <p><strong>We accept</strong></p>
                                                <img className="me-2" width="45px"
                                                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                                alt="Visa" />
                                                <img className="me-2" width="45px"
                                                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                                alt="American Express" />
                                                <img className="me-2" width="45px"
                                                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                                alt="Mastercard" />                           
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                </div>

                {/* right section */}
                {/* Summary */}
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-header py-3">
                            <h5 className="mb-0">Summary</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    Total Quantity <span>{totalQuantity}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    Total Products price <span>${totalPrice}</span>
                                </li>
                                <hr />
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                    <div> <strong>Amount to be paid</strong> </div>
                                    <span><strong>${totalPrice}</strong></span>
                                </li>
                            </ul>
                            {totalPrice !== 0 && (                        
                                <Link to="/checkout" className="btn btn-warning btn-block" >Go to checkout</Link>                                                                
                            )}
                            { totalPrice === 0 && (
                                <button type="button" className="btn btn-danger" disabled={totalPrice === 0} >
                                    No Item Selected
                                </button>
                            )}
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CartPage