import React from 'react';
import { useSelector } from 'react-redux';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ProductCard from './ProductCard';

export default function App() {
    const { cart, items, totalQuantity, totalPrice } = useSelector(state => state.cart)
    console.log(items)
  return (
    <div class="product_container m-3">
        <MDBRow>
            { items && items.map(item => (
                <MDBCol md='3' key={item.id}>
                    <ProductCard item={item} />
                </MDBCol>
            )) }
        </MDBRow>
    </div>
  );
}