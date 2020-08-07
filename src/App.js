import React, { useEffect } from 'react';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login.js"
import {useStateValue} from './StateProvider';


import './App.css';
import {BrowserRouter as Router, Switch,Route } from "react-router-dom"
import { auth } from './firebase';

//peace of code rund based on given condition
//useEffect




function App() {
  const [{user},dispatch]=useStateValue();

  useEffect( () => {
    const unsubcribe=auth.onAuthStateChanged((authUser)=>{
    if (authUser){
      //log in
  
      dispatch({
        type:"SET_USER",
        user:authUser
      })
    }
    else{
      //log out
      dispatch({
        type:"SET_USER",
        user:null,
      })
    }});  
  
  
  
  
  return () => {
    //ANy clean up
    unsubcribe();
  }
  
  },[]);


  console.log("User Is",user);

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header/>
          <Checkout></Checkout>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
          
          </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
