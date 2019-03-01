import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import decode from "jwt-decode";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "react-perfect-scrollbar";

// core components
import UserNavbar from "components/Navbars/UserNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";

import routes from "routes.js";

// import logo from "assets/img/favicon.jpg";
// live chat

var ps;

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue",
      sidebarOpened:
        document.documentElement.className.indexOf("nav-open") !== -1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
   
  
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      if (navigator.platform.indexOf("Win") > -1) {
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/User") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].rtlName || routes[i].name;
      }
    }
    return "Brand";
  };

  checkAuth () {
    const token = localStorage.getItem('cptoken');
    if(!token) {
      return false;
    }
    try {
      const payload = decode(token);
      if(payload.exp < Date.now() / 1000) {
        console.log(payload.exp)
        return false;
      }
      else{
        return true;
      }
    }
    catch(e){
      return false;
    }
    return true;
  }

  render() {
      const isAuth = this.checkAuth()
    return (
      <>
      {isAuth === false ? <Redirect to={{pathname: '/rtl/login'}} /> : (

        <div className="wrapper">
          <div
            className="main-panel"
            ref="mainPanel"
            data={this.state.backgroundColor}
          >
            <UserNavbar
              {...this.props}
              brandText={this.getBrandText(this.props.location.pathname)}
              toggleUserNavbar={this.toggleUserNavbar}
              sidebarOpened={this.state.UserNavbarOpened}
            />
            <Switch>{this.getRoutes(routes)}</Switch>
            {// we don't want the Footer to be rendered on map page
            this.props.location.pathname.indexOf("maps") !== -1 ? null : (
              <Footer fluid />
            )}
          </div>
        </div>
    )}
        
      </>
    );
  }
}



export default User;
