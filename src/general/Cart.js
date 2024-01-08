import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from './Cart.module.css'
import { setClothesForCheckout } from '../actions/cart.action'
import { CheckoutPage } from "../utils/constants";
import { useNavigate } from 'react-router-dom';

const Cart = ({ onClose, clothes }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [quantities, setQuantities] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
        const initialQuantities = {};
        clothes.forEach((ele) => {
            initialQuantities[ele.id] = 1;
        });
        setQuantities(initialQuantities);
    }, [clothes]);

    const orderTotal = clothes
        .reduce((total, ele) => total + ele.price * quantities[ele.id], 0);

    const handleQtyChange = (id, delta) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max(prevQuantities[id] + delta, 1),
        }));
    };

    const handleRedirectCheckout = () => {
        const actionPayload = clothes;
        console.log("Action Payload:", actionPayload);
        dispatch(setClothesForCheckout(actionPayload));
        navigate(CheckoutPage);
        // window.open(CheckoutPage, "_self")
    }

    return (
        <div className={styles.base}>
            <div className={`${styles.cartbase} ${isVisible && styles.visible}`}>
                <div className={styles.textAndCloseHolder}>
                    <h3 className={styles.cartMainText}>Your cart</h3>
                    <p className={styles.closeCss} onClick={onClose}>X</p>
                </div>
                {clothes.map((ele) => {
                    return (
                        <>
                            <div className={styles.cartItem}>
                                <img
                                    src={ele.clothesImg}
                                    className={styles.clothesImg}
                                />
                                <div className={styles.detailContainer}>
                                    <p className={styles.name}>{ele.name}</p>
                                    <p className={styles.color}>Color: {ele.availableColors[0]}, Size: {ele.size[0]}</p>
                                    <div className={styles.qtyAndButton}>
                                        <p className={styles.colorQty}>OTY: {quantities[ele.id]}</p>
                                        <div className={styles.qtyButtons}>
                                            <button className={styles.plusMinusButton} onClick={() => handleQtyChange(ele.id, -1)}>-</button>
                                            <button className={styles.plusMinusButton} onClick={() => handleQtyChange(ele.id, 1)}>+</button>
                                        </div>
                                    </div>
                                    <div className={styles.editAndPrice}>
                                        <p>Total: {ele.price}</p>
                                        <p className={styles.edit}>edit</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.subTotal}>
                                <p className={styles.color}>Subtotal:</p>
                                <p className={styles.color}>{ele.price * quantities[ele.id]}</p>
                            </div>
                        </>
                    )
                })}
                <div className={styles.subTotalAndNext}>
                    <div className={styles.subTotal}>
                        <p className={styles.orderTotal}>Order total(excluding delivery):</p>
                        <p className={styles.orderTotal}>{orderTotal}</p>
                    </div>
                    <p className={styles.taxesText}>*All taxes are included in product prices </p>
                    <div className={styles.buttonHolder}>
                        <button
                            className={styles.buttonView}
                        >
                            VIEW BAG
                        </button>
                        <button
                            className={styles.buttonCheckout}
                            onClick={handleRedirectCheckout}
                        >
                            CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart