import "./index.scss";
import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Grids from "./components/Grids/Grids";
import Earnings from "./components/Earnings/Earnings";
import ProfileSettings from "./components/ProfileSettings/ProfileSetting";
import NavbarLogin from "./components/NavbarLogin/NavbarLogin";
import Login from "./pages/LoginPage/Login";
import Offering from "./components/Offering/Offering";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import SignUp from "./pages/SignUp";


/**
 * Comment by: Abdul Rehman Huzaifa
 * Purpose of the statement: window.Buffer = window.Buffer || require("buffer").Buffer;
 * Wagmi's Wallet Connects module uses Buffer, which is not supported by webpack 5.
 * This statement adds Buffer support on the browser.
 * Github Issue: https://github.com/WalletConnect/walletconnect-monorepo/issues/748
 */
window.Buffer = window.Buffer || require("buffer").Buffer;

function App() {


  return (

    <BrowserRouter>
      {" "}
      {/* <NavbarLogin /> */}
      <NavbarLogin showRemainingNavbarAfterSignin={true} />
      {/* {!token ? (<NavbarLogin  />) : (<NavbarLogin showRemainingNavbarAfterSignin={true} />)} */}
      <Routes>
        <Route path="/" element={<LoginScreen />}>
        </Route>{" "}
        <Route path="/Login" element={<Login />}>
          {" "}
        </Route>{" "}
        <Route path="/Login" element={<Login />}>
          {" "}
        </Route>{" "}
        <Route path="/Dashboard" element={<Dashboard />}>
          {" "}
        </Route>{" "}
        <Route path="/Grids" element={<Grids />}>
          {" "}
        </Route>{" "}
        <Route path="/Earnings" element={<Earnings />}>
          {" "}
        </Route>
        <Route path="/Offering" element={<Offering />}>
          {" "}
        </Route>
        {" "}
        <Route path="/ProfileSetting" element={<ProfileSettings />}>
          {" "}
        </Route>{" "}
        <Route path="/Offering" element ={<Offering />}>
        </Route>{" "}
        <Route path="/signup" element={<SignUp/>}>
        </Route>
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
