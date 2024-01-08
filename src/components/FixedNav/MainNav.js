import React, { useState, useEffect } from "react";
import styles from './MainNav.module.css'
import MainNavJson from '../../dataJson/MainNav.json'
import search from "../../images/search.svg"
import { useDispatch } from "react-redux";
import profile from "../../images/profile.svg"
import { getCategories } from "../../actions/mainNav.action";
import SignIn from "../SignIn/SignIn";


const MainNav = () => {
    const [mainNavData, setMainNavData] = useState([])
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [selectedNav, setSelectedNav] = useState([])
    const [allNavData, setAllNavData] = useState([])
    const [isSignInVisible, setSignInVisible] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())  
        .then((result) => {
            let res = result.payload
            setAllNavData(res.data)
        })
        .catch((e) => {
            console.log("Error: ", e);
        })
    }, [])

    useEffect(() => {
        setMainNavData(MainNavJson)
    }, [])

    const handleMouseEnter = (id) => {
        let selectedNav = allNavData.find((ele, index) => {
            return ele.id == id
        })
        setSelectedNav(selectedNav)
        setIsPopupOpen(true)
    }

    const handleRedirect = () => {
        window.open(`/clothes`, `_self`)
    }

    const handleOpenSignIn = () => {
        setSignInVisible(true);
      };
    
      const handleCloseSignIn = () => {
        setSignInVisible(false);
      };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.subContainer}>
                {
                    mainNavData.map((ele, index) => {
                        return (
                            <>
                                <p
                                    className={styles.eachNav}
                                    onMouseEnter={() => handleMouseEnter(ele.id)}
                                >
                                    {ele.name}
                                </p>
                                {
                                    isPopupOpen &&
                                    selectedNav &&
                                    selectedNav.id == ele.id && (
                                        <div className={styles.popup} onMouseLeave={() => setIsPopupOpen(false)}>
                                            <div>
                                            <h3>{selectedNav.name}</h3>
                                            {selectedNav.data.map((ele, index) => {
                                                return (
                                                    <p className={styles.clickable} onClick={handleRedirect}>{ele.split(", ")}</p>
                                                )
                                            })}
                                            </div>
                                            <div>
                                                <h3>OFFERS</h3>
                                                {selectedNav.offers.map((ele, index) => {
                                                    return (
                                                        <p className={styles.clickable}>{ele.split(", ")}</p>
                                                    )
                                                })}
                                            </div>
                                            <div>
                                            {
                                                selectedNav.nowTrending !== null ? (
                                                    <div>
                                                        <h3>Now Trending</h3>
                                                        {selectedNav.nowTrending.map((ele) => {
                                                            return (
                                                                <p className={styles.clickable}>{ele.split(", ")}</p>
                                                            )
                                                        })}
                                                    </div>
                                                ) : ""
                                            }
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                        )
                    })
                }
            </div>
            <div className={styles.subContainer2}>
                <img
                    src={search}
                    style={{
                        width: "6%"
                    }}
                />
                <img
                    src={profile}
                    style={{
                        width: "6%"
                    }}
                    onClick={handleOpenSignIn}
                />
            </div>
            {isSignInVisible && <SignIn onClose={handleCloseSignIn} />}
        </div>
    )
}

export default MainNav