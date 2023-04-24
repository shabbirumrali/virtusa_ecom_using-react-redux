import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice'
// import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

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
            <button className='btn btn-outline-info' onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
          </div>
        </div>
      </>
    // <MDBCard>
    //     <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
    //         <MDBCardImage src={item.img} fluid alt={item.title} />
    //         <a>
    //         <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
    //         </a>
    //     </MDBRipple>
    //     <MDBCardBody>
    //         <MDBCardTitle>{item.title}</MDBCardTitle>
    //         <MDBCardText>
    //             {item.price}
    //         </MDBCardText>
    //             <MDBBtn onClick={() => dispatch(addToCart(item))}>Add to Cart</MDBBtn>
    //     </MDBCardBody>
    // </MDBCard>
  )
}

export default ProductCard