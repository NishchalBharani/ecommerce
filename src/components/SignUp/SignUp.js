import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import styles from './SignUp.module.css'
import { signup } from "../../actions/signUp.action"

const SignUp = ({ onClose }) => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    })
    const [loginStatus, setLoginStatus] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(userData));
    };

    return (
        <div className={styles.base}>
            <div className={`${styles.loginBase} ${isVisible ? styles.visible : styles.hidden}`}>
                <h4 className={styles.heading}>Create Account</h4>
                <p className={styles.subHeading}>Don't have an account? No worries, creating one is quick and easy to do!</p>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputHolder}>
                        <label className={styles.label}>First Name</label>
                        <input
                            className={styles.inputField}
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            required
                            placeholder="First Name"
                        />
                        <label className={styles.label}>Last Name</label>
                        <input
                            className={styles.inputField}
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            required
                            placeholder="Last Name"
                        />
                        <label className={styles.label}>Email</label>
                        <input
                            className={styles.inputField}
                            type="email"
                            name="email"
                            onChange={handleChange}
                            required
                            placeholder="Email"
                        />
                        <label className={styles.label}>Password</label>
                        <input
                            className={styles.inputField}
                            type="password"
                            name="password"
                            onChange={handleChange}
                            required
                            placeholder="Password"
                        />
                        <label className={styles.label}>Mobile</label>
                        <input
                            className={styles.inputField}
                            type="number"
                            name="phoneNumber"
                            onChange={handleChange}
                            // required
                            placeholder="Mobile Number"
                        /><br>
                        </br>
                        <p>By continuing you agree to our Terms & Conditions. See our Privacy Notice</p>
                        <button type="submit" className={styles.button}>Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp