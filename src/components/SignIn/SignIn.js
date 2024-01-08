import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./SignIn.module.css";
import { signin } from "../../actions/signUp.action";
import SignUp from "../SignUp/SignUp";

const SignIn = ({ onClose }) => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [loginStatus, setLoginStatus] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isSignInVisible, setSignInVisible] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(userData))
            .then((result) => {
                if (result.status === "ERROR") {
                    setLoginStatus(true);
                }
            })
            .catch((error) => {
                setLoginStatus(false);
            });
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleOpenSignIn = () => {
        setSignInVisible(true);
      };
    
      const handleCloseSignIn = () => {
        setSignInVisible(false);
      };

    return (
        <div className={styles.base}>
            <div className={`${styles.loginBase} ${isVisible ? styles.visible : styles.hidden}`}>
                <h4 className={styles.heading}>Login</h4>
                <p className={styles.subHeading}>Log in to quickly navigate to the page you're looking for.</p>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputHolder}>
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
                        {loginStatus ? (
                            <p className={styles.para}>Invalid email or password</p>
                        ) : (
                            ""
                        )}
                        <div className={styles.checkBox}>
                            <input
                                type="checkbox"
                                style={{ transform: "scale(1.2)" }}
                            />
                            <p>Remember me</p>
                        </div>
                        <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                            <button type="submit" className={styles.button}>
                                LOG IN
                            </button>
                            <h4>Forgot password?</h4>
                        </div>
                        <h4 className={styles.newText}>New to our website?</h4>
                        <p className={styles.newTextPara}>Create an account to check out faster in the future and receive emails about your orders, new products, events and special offers!</p>
                        <button className={styles.button} onClick={handleOpenSignIn}>
                            REGISTER
                        </button>
                    </div>
                </form>
            </div>
            {isSignInVisible && <SignUp onClose={handleCloseSignIn} />}
        </div>
    );
};

export default SignIn;