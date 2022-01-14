import React, { useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Aboutus from './Component/Aboutus';
import Ourservices from './Component/Ourservices';
import Ourclients from './Component/Ourclients';
import Ourcontacts from './Component/Ourcontacts';
import Booking from "./Component/Booking";
import Userbooking from "./Component/Userbooking";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Footer from './Component/Footer';

const App = () => {

  const [islogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>

      <Navbar islogin={islogin} logout={(flag) => setIsLogin(flag)} />

      <Route exact path="/" component={Home} />
      <Route path="/Aboutus" component={Aboutus} />
      <Route path="/Ourservices" component={Ourservices} />
      <Route path="/Ourclients" component={Ourclients} />
      <Route path="/Ourcontact" component={Ourcontacts} />
      <Route path="/Booking" component={Booking} />
      <Route path="/Userbooking" component={Userbooking} />
      <Route path="/Login" render={() => (<Login update={(flag) => setIsLogin(flag)} />)} />
      <Route path="/Signup" component={Signup} />

      <Footer />

    </BrowserRouter>
  )
};

export default App;
