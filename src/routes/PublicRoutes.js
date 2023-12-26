import React from "react";
import { Route, Routes } from "react-router-dom";
//Routes Imports
import {
  Home,
  Signup,
  Signin,
  Clothes
} from "../utils/constants.js"

//Component Imports
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import HomePublic from "../components/Home/HomePublic";
import ClothesPage from "../components/Home/ClothesPage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path={Signin} element={<SignIn />} />
      <Route path={Signup} element={<SignUp />} />
      <Route path={Home} element={<HomePublic />}/>
      <Route path={Clothes} element={<ClothesPage />}/>
    </Routes>
  );
};

export default PublicRoutes;