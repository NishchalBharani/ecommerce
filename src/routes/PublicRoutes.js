import React from "react";
import { Route, Routes } from "react-router-dom";
//Routes Imports
import {
  Home,
  Signup,
  Signin,
  Clothes,
  ClothesDetail,
  CheckoutPage
} from "../utils/constants.js"

//Component Imports
// import SignIn from "../components/SignIn/SignIn";
// import SignUp from "../components/SignUp/SignUp";
import HomePublic from "../components/Home/HomePublic";
import ClothesPage from "../components/Home/ClothesPage";
import ClothesDetailPage from "../components/Home/ClothesDetailPage.js";
import Checkout from "../components/checkout/CheckoutPage.js";

const PublicRoutes = () => {
  return (
    <Routes>
      {/* <Route path={Signin} element={<SignIn />} />
      <Route path={Signup} element={<SignUp />} /> */}
      <Route path={Home} element={<HomePublic />}/>
      <Route path={Clothes} element={<ClothesPage />}/>
      <Route path={ClothesDetail} element={<ClothesDetailPage />}/>
      <Route path={CheckoutPage} element={<Checkout />}/>
    </Routes>
  );
};

export default PublicRoutes;