import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.jsx";
import RTLLayout from "layouts/RTL/RTL.jsx";
import UserLayout from "layouts/User/User.jsx";
import CPLayout from "layouts/Cp/CP.jsx";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "assets/css/style.css";


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/rtl" render={props => <RTLLayout {...props} />} />
     
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/User" render={props => <UserLayout {...props} />} />
      <Route path="/Cp" render={props => <CPLayout {...props} />} />

      <Redirect from="/" to="/rtl/home" />
      
    </Switch>
  </Router>,
  document.getElementById("root")
);
