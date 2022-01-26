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
import Bookingdetails from "./Component/Bookingdetails";
import Userbooking from "./Component/Userbooking";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Footer from './Component/Footer';

const App = () => {

  const [islogin, setIsLogin] = useState(false);
  const Admin = localStorage.getItem("isadmin");
  console.log(Admin)
  return (
    <BrowserRouter>

      <Navbar islogin={islogin} logout={(flag) => setIsLogin(flag)} />

      <Route exact path="/" component={Home} />
      <Route path="/Aboutus" component={Aboutus} />
      <Route path="/Ourservices" component={Ourservices} />
      <Route path="/Ourclients" component={Ourclients} />
      <Route path="/Ourcontact" component={Ourcontacts} />
      <Route
        path="/Booking"
        render={(props) => {
          const Admin = localStorage.getItem("isadmin");
          if (Admin) {
            console.log(Admin)
            return <Booking />
          }
          props.history.push("/Login");
        }}
      />
      <Route
        path="/Bookingdetails"
        render={(props) => {
          const Admin = localStorage.getItem("isadmin");
          if (Admin) {
            return <Bookingdetails />
          }
          props.history.push("/Login");
        }}
      />
      <Route
        path="/Userbooking"
        render={(props) => {
          const Admin = localStorage.getItem("isadmin");
          if (Admin) {
            return <Userbooking />
          };
          props.history.push("/Login");
        }}
      />
      <Route path="/Login" render={(props) => {
        const Admin = localStorage.getItem("isadmin");
        if (!Admin) {
          return <Login update={(flag) => setIsLogin(flag)} />
        };
        props.history.push("/");
      }}
      />
      <Route path="/Signup" render={(props) => {
        const Admin = localStorage.getItem("isadmin");
        if (!Admin) {
          return <Signup />
        };
        props.history.push("/");
      }}
      />
      
      <Footer />

    </BrowserRouter>
  )
};

export default App;
