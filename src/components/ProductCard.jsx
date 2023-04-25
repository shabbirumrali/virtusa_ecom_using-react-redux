import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice'

const ProductCard = ({ item }) => {
  const dispatch = useDispatch()
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
          <img src={item.img} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Verified Product</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{item.price}</li>
            <li className="list-group-item">Available</li>
            <li className="list-group-item">Esimated time: 4 days</li>
          </ul>
          <div className="card-body">
            <button className='btn btn-warning btn-sm' onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
          </div>
        </div>
      </>
  )
}

export default ProductCard