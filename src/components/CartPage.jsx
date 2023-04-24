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
                                    <div key={cartItem.id} className="row">
                                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                            {/*  Image  */}
                                            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                <img src={cartItem.img} className="w-100" alt={cartItem.title} />
                                            </div>
                                        </div>

                                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                            {/* Data  */}
                                            <p><strong>{ cartItem.title }</strong></p>
                                            {/* Delete button */}
                                            <button type="button" onClick={() => dispatch(removeItem(cartItem.id))}  className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                                                title="Remove item">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                            {/* Like button */}
                                            <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                                                title="Move to the wish list">
                                                <i className="fas fa-heart"></i>
                                            </button>
                                        </div>

                                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                            {/* Quantity  */}
                                            { cartItem.quantity > 0 ? (
                                                <>
                                                    <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
                                                        <button className="btn btn-danger px-3 me-2"
                                                            onClick={() => dispatch(decreaseItemQuantity(cartItem.id))}>
                                                            <i className="fas fa-minus"></i>
                                                        </button>

                                                        <div className="form-outline">
                                                            <input id="form1" min="0" name="quantity" value={cartItem.quantity} type="number" className="form-control" />
                                                            <label className="form-label" for="form1">
                                                                Quantity
                                                            </label>
                                                        </div>

                                                        <button className="btn btn-primary px-3 ms-2"
                                                            onClick={() => dispatch(increaseItemQuantity(cartItem.id))}>
                                                            <i className="fas fa-plus"></i>
                                                        </button>
                                                        {/* Price  */}
                                                        <br />
                                                    </div>
                                                    <p className="text-start text-md-center">
                                                        <span>{cartItem.quantity} for </span>
                                                        <strong>{cartItem.quantity * cartItem.price}</strong>
                                                    </p>
                                                </>
                                            ): (
                                                <button className="btn btn-primary px-3 ms-2"
                                                    onClick={() => dispatch(increaseItemQuantity(cartItem.id))}>
                                                    Add Value to the Cart
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                             )}

                                            {/* Quantity */}

                                        </div>
                                    </div>
                                ))
                                }
                                <hr className="my-4" />
                            </div>
                        </div>

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
                            <img className="me-2" width="45px"
                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                            alt="PayPal acceptance mark" />
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
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Total Products price
                                <span>{totalPrice}</span>
                            </li>
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Total Quantity
                                <span>{totalQuantity}</span>
                            </li>
                            <hr />
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                    <strong>Amount to be paid</strong>
                                </div>
                                <span><strong>{totalPrice}</strong></span>
                            </li>
                             <li
                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                    <strong>Amount to be paid in USD</strong>
                                </div>
                                <span><strong>${Math.ceil(totalPrice/81)}</strong></span>
                            </li>
                            </ul>
                            {totalPrice !== 0 && (
                                <button type="button" className="btn btn-primary btn-lg btn-block" >
                                    <Link to="/checkout" style={{ color: 'white' }}>Go to checkout</Link>
                                </button>
                            )}
                            { totalPrice === 0 && (
                                <button type="button" className="btn btn-primary btn-lg btn-block" disabled={totalPrice === 0} >
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