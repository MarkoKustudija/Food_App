import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import {currencyFormatter} from '../../util/formatting';
import Button from '../UI/Button';
import UserProgressContex from "../../store/UserProgressContex";

function Cart() {
  const userProgressCtx = useContext(UserProgressContex);
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price, 0);

  const handleCloseCart= () => {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
     {/* <Modal className="cart" open={true}> */}
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
         <Button textOnly onClick = {handleCloseCart} >Close</Button>
         <Button>Go to Checkout</Button>
      </p>
    </Modal>
    
  );
}

export default Cart;
