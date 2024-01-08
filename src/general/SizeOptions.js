import React, { useState } from "react";
import styles from './SizeOptions.module.css'

const SizeOptions = ({ size }) => {
    const [selectedSize, setSelectedSize] = useState(null)

    const handleSizeClick = (size) => {
        setSelectedSize(size)
    }

    return (
        <div className={styles.sizeOptionsContainer}>
            {size.map((size, index) => (
                <div
                    key={index}
                    className={`${styles.sizeOption} ${selectedSize === size ? styles.selected : ""}`}
                    onClick={() => handleSizeClick(size)}
                >
                    {size}
                </div>
            ))}
        </div>
    )
}

export default SizeOptions