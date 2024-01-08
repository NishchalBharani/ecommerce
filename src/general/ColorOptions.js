import React, { useState } from "react";
import styles from './ColorOptions.module.css';

const ColorOptions = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className={styles.colorOptionsContainer}>
      {colors.map((color, index) => (
        <div
          key={index}
          className={`${styles.colorOption} ${selectedColor === color ? styles.selected : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorOptions;
