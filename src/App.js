import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Payment from "./Payment";
import Checkout from "./Checkout";
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';


const promise = loadStripe('pk_test_51Hyz3UHKXBWZgneOyec5W2BRKxneiSW5QJChoX7jjS5zkAYyO3mhNiCDcWb8311W5pJqXDNfaQ2NeMrs0uHnxCuT00X25DBwRY');

function App() {
  const [{ user }, dispatch] = useStateValue();//add this to store for login and logout details.

  //useEffect is the needed to render data based on condition.

  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //user login
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }else{
        //user logout
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return()=>{
      unsubscribe();
    };

  }, []);

  console.log(user);

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route  path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/orders">
          <Header/>
          <Orders />
        </Route>
        <Route path="/payment">
          <Header/>
          <Elements stripe = {promise}>
            <Payment/>
          </Elements>
        </Route>
        <Route path="/">
          <Header/>
          <Home />
        </Route>
      </Switch>    
    </div>
    </Router>
  );
}

export default App;
