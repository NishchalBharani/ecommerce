import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './ClothesDetailPage.module.css'
import clothesData from '../../dataJson/Clothes.json'
import ColorOptions from '../../general/ColorOptions'
import SizeOptions from '../../general/SizeOptions'
import { useNavigate } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Cart from "../../general/Cart"

const ClothesDetailPage = () => {
    const [clothes, setClothes] = useState([])
    const [cartClothes, setCartClothes] = useState([])
    const [topClothes, setTopClothes] = useState([])
    const [isCartVisible, setCartVisible] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const clothesItem = clothesData.find((ele) => ele.id === parseInt(id, 10));

        setClothes(clothesItem ? [clothesItem] : []);
    }, [id]);

    useEffect(() => {
        setTopClothes(clothesData.slice(0, 6))
    }, [])

    const navigateToClothesDetail = (id) => {
        if (id !== undefined && id !== null) {
            navigate(`/clothesdetail/${id}`);
        } else {
            console.error("Invalid id:", id);
        }
    };

    const handlebuttonClick = (newClothes) => {
    
        const isItemAlreadyInCart = cartClothes.some(item => item.id === newClothes.id);

        if (!isItemAlreadyInCart) {
            setCartClothes(prevCartClothes => [...prevCartClothes, newClothes]);
        }
    
        setCartVisible(true);
    }

    const handlebuttonCloseClick = () => {
        setCartVisible(false)
    }

    return (
        <div className={styles.base}>
            <div className={styles.imgAndDetailContainer}>
                <div className={styles.imgContainer} onClick={() => console.log(clothes)}>
                    {
                        clothes && clothes.map((ele, index) => {
                            return (
                                <img
                                    className={styles.clotheImage}
                                    src={ele.clothesImg}
                                />
                            )
                        })
                    }
                </div>
                <div className={styles.detailContainer}>
                    {
                        clothes && clothes.map((ele, index) => {
                            return (
                                <div style={{ width: "100%" }}>
                                    <h2 className={styles.detailName}>{ele.name}</h2>
                                    <p className={styles.detailPrice}>{ele.price} Rs</p>
                                    <ColorOptions colors={ele.availableColors} />
                                    <SizeOptions size={ele.size} />
                                    <div className={styles.sizeAndQuantityContainer}>
                                        <p className={styles.quantity}>
                                            {ele.quantity <= 5
                                                ? `Only ${ele.quantity} left!`
                                                : `${ele.quantity} left`
                                            }
                                        </p>
                                        <div className={styles.grayVerticalLine}></div>
                                        <p className={styles.styleGuide}>Size Guide</p>
                                    </div>
                                    <div>
                                        <button 
                                            className={styles.button}
                                            onClick={() => handlebuttonClick(ele)}
                                        >
                                            Add to bag
                                        </button>
                                    </div>
                                    <div className={styles.descriptionContainer}>
                                        <p className={styles.descriptionText}>
                                            {ele.description && (
                                                <>
                                                    {ele.description.split('\n\n')
                                                        .filter((section) => section.trim() !== '')
                                                        .map((section, sectionIndex) => (
                                                            <div key={sectionIndex}>
                                                                {section.startsWith("'") ? (
                                                                    <p>{section}</p>
                                                                ) : (
                                                                    section.includes('\n') && !section.includes(':') ? (
                                                                        <ul>
                                                                            {section.split('\n').map((line, lineIndex) => (
                                                                                <li key={lineIndex}>{line.trim()}</li>
                                                                            ))}
                                                                        </ul>
                                                                    ) : (
                                                                        <p>{section.trim()}</p>
                                                                    )
                                                                )}
                                                            </div>
                                                        ))}
                                                </>

                                            )}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.topClothesContainer}>
                <h2 className={styles.theseWould}>These would look good on you</h2>
                <div className={styles.topClothes}>
                    {
                        topClothes.map((ele) => {
                            return (
                                <div key={ele.id} onClick={() => navigateToClothesDetail(ele.id)}>
                                    <img
                                        src={ele.clothesImg}
                                        className={styles.clothesImg}
                                    />
                                    <div>
                                        <h6 className={styles.name}>{ele.name}</h6>
                                        <h4 className={styles.price}>{ele.price} Rs</h4>
                                        <h4 className={styles.offer}>Flat {ele.offer}</h4>
                                    </div>
                                    <ColorOptions colors={ele.availableColors}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
            {isCartVisible && <Cart onClose={handlebuttonCloseClick} clothes={cartClothes}/>}
        </div>
    )
}

export default ClothesDetailPage