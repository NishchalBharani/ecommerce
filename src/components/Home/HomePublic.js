import React, { useState, useEffect } from "react";
import styles from "./HomePublic.module.css";
import Footer from "../Footer/Footer";

const images = [
  "https://media.boohoo.com/i/boohooamplience/231218_Desktop_60DressesTopsShoes_US(1)",
  "https://media.boohoo.com/i/boohooamplience/231221_Desktop_Extra15_US_02",
];

const HomePublic = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 10000);

    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <div className={styles.base}>
      <div className={styles.slider} style={{ transform: `translateX(${-currentImage * 50}%)` }}>
          <button className={`${styles.navButton} ${styles.topButton}`} onClick={prevImage}>
            {"<"}
          </button>
          <button className={`${styles.navButton} ${styles.bottomButton}`} onClick={nextImage}>
            {">"}
          </button>
        <div className={styles.imageHolder}>
        </div>
        <div className={styles.imageHolder2}></div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePublic;