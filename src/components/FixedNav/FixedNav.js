import React from "react";
import styles from './FixedNav.module.css'

const FixedNav = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.subContainer}>
                <h2>
                    60% OFF Dresses, Tops & Footwear!*<br></br> Build your New Year Looks
                </h2>
            </div>
            <div className={styles.subContainer1}>
                <h2>
                    Download the app for an exclusive extra 20% OFF everything*<br></br> Hurry ends soon!
                </h2>
            </div>
            <div className={styles.subContainer}>
                <h2>
                    Free Express shipping!<br></br> *On orders over 1000rs
                </h2>
            </div>
        </div>
    )
}

export default FixedNav