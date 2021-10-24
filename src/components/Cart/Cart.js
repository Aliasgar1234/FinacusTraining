import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import React, { useState, useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Form from './Form';

const Cart = (props) => {
    const [isOrder, setIsOrder] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderHandler = () => {
        setIsOrder(true);
    };

    const submitHandler = async (userData) => {
        setIsSubmit(true);
        await fetch('https://react-hook-a4e97-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmit(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(item =>
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />)}
        </ul>
    );

    const orderAction = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}

        </div>
    );

    const cartModalContent = (
        <React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>
                    {totalAmount}
                </span>
            </div>
            {isOrder && <Form onSubmit={submitHandler} onCancel={props.onClose} />}
            {!isOrder && orderAction}
        </React.Fragment>
    );

    const isSubmittingModalContent = <p>Sending cart data...</p>;

    const didSubmitModalContent = (
        <React.Fragment>
            <p>Your order has been sent successfully.</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onClose}>Close</button>
            </div>

        </React.Fragment>
    );

    return (
        <Modal onClose={props.onClose}>
            {!isSubmit && !didSubmit && cartModalContent}
            {isSubmit && isSubmittingModalContent}
            {!isSubmit && didSubmit && didSubmitModalContent}
        </Modal>
    );
};


export default Cart;