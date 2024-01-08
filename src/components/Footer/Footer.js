import React, { useState } from "react";
import styles from "./Footer.module.css"
import rightArrow from "../../images/rightArrow.svg"
import insta from "../../images/instagram.svg"
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"

const Footer = () => {
    const [email, setEmail] = useState("")

    return (
        <div className={styles.base}>
            <div className={styles.sectionBase}>
                <h4 className={styles.paragraph}>Quick Links</h4>
                <div className={styles.trackText}>
                    <p className={styles.para2}>Track My Order</p>
                    <img
                        src={rightArrow}
                        className={styles.rightArrow}
                    />
                </div>
                <div className={styles.trackText}>
                    <p className={styles.para2}>My Account</p>
                    <img
                        src={rightArrow}
                        className={styles.rightArrow}
                    />
                </div>
                <div className={styles.trackText}>
                    <p className={styles.para2}>Returns</p>
                    <img
                        src={rightArrow}
                        className={styles.rightArrow}
                    />
                </div>
                <div className={styles.trackText}>
                    <p className={styles.para2}>Shipping</p>
                    <img
                        src={rightArrow}
                        className={styles.rightArrow}
                    />
                </div>
            </div>
            <div className={styles.verticalLine}></div>
            <div className={styles.sectionBase}>
                <h4 className={styles.paragraph}>Customer care</h4>
                <p className={styles.paraNew}>Help</p>
                <p className={styles.paraNew}>Returns</p>
                <p className={styles.paraNew}>Shipping info</p>
                <p className={styles.paraNew}>Size Guide</p>
                <p className={styles.paraNew}>Privacy Notice - Updated January 2023</p>
                <p className={styles.paraNew}>Indian Consumer Privacy Act</p>
                <p className={styles.paraNew}>Terms & Conditions</p>
                <p className={styles.paraNew}>Terms Of Use</p>
                <p className={styles.paraNew}>About Cookies</p>
                <p className={styles.paraNew}>Get Exclusive Offers & Updates</p>
            </div>
            <div className={styles.verticalLine}></div>
            <div className={styles.sectionBase}>
                <h4 className={styles.paragraph}>About us & more</h4>
                <p className={styles.paraNew}>About Us</p>
                <p className={styles.paraNew}>Gift Cards</p>
                <p className={styles.paraNew}>Sustainability Plan</p>
                <p className={styles.paraNew}>Our App</p>
                <p className={styles.paraNew}>Careers</p>
                <p className={styles.paraNew}>Student Discount</p>
                <p className={styles.paraNew}>Essential Workers</p>
                <p className={styles.paraNew}>Klarna</p>
                <p className={styles.paraNew}>Afterpay</p>
                <p className={styles.paraNew}>Paypal</p>
                <p className={styles.paraNew}>Become An Affiliate</p>
                <p className={styles.paraNew}>Become A Brand Ambassador</p>
                <p className={styles.paraNew}>Discount + Promo Codes</p>
                <p className={styles.paraNew}>Environment And Social Responsibility</p>
            </div>
            <div className={styles.verticalLine}></div>
            <div className={styles.sectionBase}>
                <h4 className={styles.paragraph}>Join the party</h4>
                <input
                    type="email"
                    placeholder="Enter your email address."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    className={styles.input}
                />
                <div className={styles.checkBoxHolder}>
                    <input
                        type="checkbox"
                        className={styles.checkBox}
                    />
                    <p className={styles.paraNew} style={{ marginLeft: "5%" }}>
                        By signing up, you agree to our{" "}
                        <span className={styles.underlineText}>Privacy and Cookie Policies</span>
                    </p>
                </div>
                <button className={styles.button}>SUBSCRIBE</button>
                <p>Follow us</p>
                <div style={{display: "flex", gap: "10px"}}>
                    <img src={insta} style={{width: "15%"}}/>
                    <img src={facebook} style={{width: "17%"}}/>
                    <img src={twitter} style={{width: "15%"}}/>
                </div>
            </div>
        </div>
    )
}

export default Footer