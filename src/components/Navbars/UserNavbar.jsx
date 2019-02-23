import React from "react";
import { browserHistory } from 'react-router';

// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      modalSearch: false,
      color: ""
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateColor);
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: "nav-green"
      });
    } else {
      this.setState({
        color: "nav-green"
      });
    }
  };
  // this function opens and closes the collapse on small devices
  toggleCollapse = () => {
    if (this.state.collapseOpen) {
      this.setState({
        color: "navbar-transparent"
      });
    } else {
      this.setState({
        color: "bg-white"
      });
    }
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  
  handleLogout() {
    localStorage.removeItem('cptoken')
    //this.props.history.push("/user/movie");
  }
  
  render() {
    return (
      <>
       <Navbar
          className={classNames("navbar-absolute navbar-fixed nav-green px-5", this.state.color)}
          expand="lg"
        >
          <Container fluid className="px-5">
            <div className="navbar-wrapper ">
              <div
                className={classNames("navbar-toggle d-inline", {
                  toggled: this.props.sidebarOpened
                })}
              >

              </div>
              <NavbarBrand href="/Landing" >
              <div className="photo">
                      <img alt="..." src={require("assets/img/favicon.jpg")} />
                    </div>
              </NavbarBrand>
            </div>
            <button
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              id="navigation"
              type="button"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <Collapse navbar isOpen={this.state.collapseOpen}>
              <Nav className="ml-auto" navbar>

                
                
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                  >
                    <div className=" d-none d-lg-block d-xl-block" />
                    <i className="text-dark" />Movies
                    <p className="d-lg-none text-dark">Movies</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" tag="ul" right>
                    <NavLink tag="li" href="Movie">
                      <DropdownItem className="nav-item" href="Movie">
                        All
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Series
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Drama
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Adventure
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Fiction
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                       Romance
                      </DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                    onClick={e => e.preventDefault()}
                  >
                    <div className="photo">
                      <img alt="..." src={require("assets/img/anime3.png")} />
                    </div>
                    <b className="caret d-none d-lg-block d-xl-block" />
                    <p className="d-lg-none">Log out</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" tag="ul">
                    <NavLink tag="li" href="Profile" >
                      <DropdownItem className="nav-item" href="/user/Profile">Profile</DropdownItem>
                    </NavLink>
                    <NavLink tag="li" href="EditProfile" >
                      <DropdownItem className="nav-item" href="/user/EditProfile">Edit Profile</DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item" href="/user/Subscribe">Subscribe</DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item" href="/user/Payment">Payment </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item" href="/user/Watched">History</DropdownItem>
                    </NavLink>
                    <DropdownItem divider tag="li" />
                    <NavLink tag="li">
                      <DropdownItem className="nav-item" onClick={this.handleLogout}>Log out</DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <li className="separator d-lg-none" />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        
         
      </>
    );
  }
}

export default AdminNavbar;
