import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../features/cartSlice'
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch()
    return (
    <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src={item.img} fluid alt={item.title} />
            <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
        </MDBRipple>
        <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardText>
                {item.price}
            </MDBCardText>
                <MDBBtn onClick={() => dispatch(addToCart(item))}>Add to Cart</MDBBtn>
        </MDBCardBody>
    </MDBCard>
  )
}

export default ProductCard