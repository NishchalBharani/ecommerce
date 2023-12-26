import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styles from './SignUp.module.css'
import { signup } from "../../actions/signUp.action"

const SignUp = () => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(userData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.inputHolder}>
                <input
                    className={styles.inputField}
                    type="text"
                    name="username"
                    onChange={handleChange}
                    required
                    placeholder="Name"
                />

                <input
                    className={styles.inputField}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                    placeholder="Email"
                />

                <input
                    className={styles.inputField}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    required
                    placeholder="Password"
                />
                <button type="submit" className={styles.button}>Sign Up</button>
            </div>
        </form>
    )
}

export default SignUp