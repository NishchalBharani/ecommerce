import React, { useEffect } from 'react'
import styles from './CheckoutPage.module.css'
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
    const clothesForCheckout = useSelector((state) => state.cart.clothesForCheckout);

    useEffect(() => {
        console.log("CheckoutPage component mounted");
        console.log("State:", clothesForCheckout);
    }, [clothesForCheckout]);

    return (
        <div className={styles.base}>
            <div className={styles.addressSection}>
                <div className={styles.promoCode}>
                    <h2 className={styles.promoText}>Promo Code</h2>
                    <p>Promo code</p>
                    <div className={styles.inputAndButton}>
                        <input
                            type='text'
                            className={styles.input}
                        />
                        <button
                            className={styles.buttonApply}
                            onClick={()=> console.log(clothesForCheckout)}
                        >
                            APPLY
                        </button>
                    </div>
                    <p className={styles.note}>Please note, only one promo code can be applied at a time</p>
                </div>
                <div className={styles.promoCode}>
                    <h2 className={styles.promoText}>Shipping information</h2>
                    <p className={styles.label}>First Name</p>
                    <input
                        type='text'
                        className={styles.shippingInput}
                    />
                    <p className={styles.label}>Last Name</p>
                    <input
                        type='text'
                        className={styles.shippingInput}
                    />
                    <p className={styles.label}>Country</p>
                    <input
                        type='text'
                        className={styles.shippingInput}
                    />
                    <p className={styles.label}>Phone Number</p>
                    <input
                        type='text'
                        className={styles.shippingInput}
                    />
                </div>
                <div className={styles.promoCode}>
                    <h3 className={styles.promoText}>Shipping Address</h3>
                    <p className={styles.label}>Address Line 1</p>
                    <input
                        type='text'
                        className={styles.shippingInput}
                    />
                    <p className={styles.label}>Address Line 2(optional)</p>
                    <input
                        type='text'
                        className={styles.shippingInput}
                    />
                    <p className={styles.label}>City</p>
                    <input
                        type='text'
                        className={styles.shippingInput}
                    />
                    <p className={styles.label}>State</p>
                    <input
                        type='text'
                        className={styles.shippingInput}
                    />
                    <p className={styles.label}>Zip Code</p>
                    <input
                        type='text'
                        className={styles.shippingInput}
                    />
                </div>
                <button className={styles.billingButton}>PROCEED TO BILLING</button>
            </div>
            <div className={styles.summarySection}>
                <div className={styles.promoCode}>
                    <h2 className={styles.promoText}>Order Summary</h2>
                    <div className={styles.orderTotal}>
                        <p className={styles.note1}>
                            Order subtotal
                        </p>
                        <p className={styles.note1}>
                            2000 Rs
                        </p>
                    </div>
                    <div className={styles.orderTotal}>
                        <p className={styles.note1}>
                            Delivery charges
                        </p>
                        <p className={styles.note1}>
                            150 Rs
                        </p>
                    </div>
                    <div className={styles.orderTotal}>
                        <p className={styles.note1}>
                            Tax
                        </p>
                        <p className={styles.note1}>
                            TBD
                        </p>
                    </div>
                    <hr></hr>
                    <h2 className={styles.promoText}>Order total (including From 2150 Rs delivery)</h2>
                    <p className={styles.note}>*Plus applicable taxes</p>
                </div>
                <div className={styles.promoCode}>
                    <h2 className={styles.promoText}>Your cart</h2>
                    {clothesForCheckout &&
                    clothesForCheckout.map((ele, index) => {
                        return (
                            <div className={styles.cartItems}>
                                <img 
                                    src={ele.clothesImg}
                                    className={styles.clothesImg}
                                />
                                <div className={styles.itemsDetail}>
                                    <p className={styles.name}>{ele.name}</p>
                                    <p className={styles.colorAndSize}>Color: multi, Size: 22</p>
                                    <p className={styles.colorAndSize}>QTY: 2</p>
                                    <p className={styles.price}>{ele.price} Rs</p>
                                    <p className={styles.removeItem}>Remove item from you cart</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage