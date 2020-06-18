import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
//react router
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//components
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';
import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import FirebaseConfig from './firebase/FireBaseConfig';


//init firebase
firebase.initializeApp(FirebaseConfig);

function App() {

  const [user, setUser] = useState(null);

  return (
   <BrowserRouter>
     <ToastContainer />
     <UserContext.Provider value={{user, setUser}}>
      <Header />
       <Switch>
         <Route exact path="/github-search-app" component={Home} />
         <Route exact path="/signup" component={SignUp} />
         <Route exact path="/signin" component={SignIn} />

         <Route exact path="*" component={PageNotFound} />
       </Switch>
       <Footer />
     </UserContext.Provider>
   </BrowserRouter>
  );
}

export default App;
