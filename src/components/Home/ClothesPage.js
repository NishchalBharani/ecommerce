import React, { useState, useEffect } from "react";
import styles from './ClothesPage.module.css'
import category from '../../dataJson/Category.json'
import clothes from '../../dataJson/Clothes.json'
import downArrow from '../../images/downArrow.svg'
import Footer from "../Footer/Footer";
import { ClothesDetail } from "../../utils/constants";
import { useNavigate } from 'react-router-dom';

const ClothesPage = () => {
    const [categoryData, setCategoryData] = useState([])
    const [clothesData, setClothesData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        setCategoryData(category)
        setClothesData(clothes)
    }, [])

    const navigateToClothesDetail = (id) => {
        if (id !== undefined && id !== null) {
            navigate(`/clothesdetail/${id}`);
        } else {
            console.error("Invalid id:", id);
        }
    };

    return (
        <div className={styles.base}>
            <div className={styles.categoryMain}>
                <div className={styles.categoryHolder}>
                    {
                        categoryData.map((ele, index) => {
                            return (
                                <div className={styles.eachCategory}>
                                    <div key={ele.id}>
                                        {ele.name}
                                    </div>
                                    <img
                                        src={downArrow}
                                        className={styles.downArrow}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.clothesMain}>
                {
                    clothesData.map((ele) => {
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
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    )
}

export default ClothesPage