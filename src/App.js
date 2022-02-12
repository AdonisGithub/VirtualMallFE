import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Footer} from "./components/footer";
import {HomePage} from './page/Homepage';
import {SignupPage} from './page/SignupPage';
import {LoginPage} from "./page/LoginPage";
import {ResetPasswordRequestPage1} from "./page/ResetPasswordPage/ResetPasswordRequestPage1";
import {ResetPasswordRequestPage2} from "./page/ResetPasswordPage/ResetPasswordRequestPage2";
import {ResetPasswordPage} from "./page/ResetPasswordPage/ResetPasswordPage";
import { SellerHomePage } from './page/SellerHompage';
import { SellerSignupPage } from './page/SellerSignupPage';
import { SellerSignupCongratuationsPage } from './page/SellerSignupCongratualtionsPage';
import { SellermobileLoginPage } from './page/SellermobileLoginPage';
import { VirtualmalPage } from './page/VirtualmalPage';
import { SellerVirtualmalPage } from './page/SellerVirtualmallPage';
import Example from "./page/exersise";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/resetpasswordrequest1" element={<ResetPasswordRequestPage1 />} />
          <Route exact path="/resetpasswordrequest2" element={<ResetPasswordRequestPage2 />} />
          <Route exact path="/resetpassword" element={<ResetPasswordPage/>} />
          <Route exact path="/sellerhomepage" element={<SellerHomePage/>} />
          <Route exact path="/sellersignup" element={<SellerSignupPage/>} />
          <Route exact path="/sellersignupcongratulations" element={<SellerSignupCongratuationsPage/>} />
          <Route exact path="/sellermobilelogin" element={<SellermobileLoginPage/>} />
          <Route exact path="/virtualmal" element={<VirtualmalPage/>} />
          <Route exact path="/sellervirtualmal" element={<SellerVirtualmalPage/>} />
          <Route exact path="/exersise" element={<Example />} />
        </Routes>
        <Footer />
      </Router>
  );
}
export default App;
