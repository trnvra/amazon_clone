import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {auth} from "./firebase";
import { useStateValue} from "./StateProvider";
import Payment from './payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// useEffect(()=>{
//   // will onlu run once when the component loads..
//     auth.onAuthStateChanged(authUser =>{
//       console.log('The User is >>>',authUser);

//       if(authUser){
//         // the user just logged in 
//       }else {
//         // the user is logged out
//       }
//     })
// },[])
function App() {
  const [{},dispatch]=useStateValue();
  
  // how do we actually keep track of who is signed in
// we do this by creating a listener
// by this we quickly show thathow we add something to the db and pulling to the db
  useEffect(()=>{
    // will onlu run once when the component loads..
      auth.onAuthStateChanged(authUser =>{
        console.log('The User is >>>',authUser);
  
        if(authUser){
          // the user just logged in 
          // if u are logged in just dispatch  user information into data layer
          dispatch({
            type:'SET_USER',
            user:authUser 
          })
        }else {
          // the user is logged out
          // if you logout basically redicate the user information
          dispatch({
            type:'SET_USER',
            user:null
          })
        }
      })
  },[])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
           <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
            <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders/>
            
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
