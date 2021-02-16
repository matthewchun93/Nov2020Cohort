import React from "react";
import { useSelector } from 'react-redux';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct'

const Cart = () => {

    const products = useSelector(state => state.cart);
    const totalCost = useSelector(state => state.totalCost);

  return <>
  
    <h1>Shopping Cart</h1>

    <AddProduct />
    total Cost: ${totalCost}
    <ul>
        {products.map(p => {
            return <li key={p.id}>{p.productName} ${p.price}</li>
        })}
    </ul>

  </>;
};

export default Cart;
