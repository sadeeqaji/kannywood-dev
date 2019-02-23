import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  Nav,
  InputGroup,
  Container,
  
} from "reactstrap";

class UserNavbar extends React.Component {
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
        color: "nav-green"
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
 
  render() {
    return (
      <>
        <Navbar
          className={classNames("navbar-absolute navbar-fixed nav-green", this.state.color)}
          expand="lg"
        >
          <Container fluid>
            <div className="navbar-wrapper">
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
                
                

              
           
              <InputGroup className="signin-bar" >
              <a href="login">
              <Button className="btn-home"
                 color="primary"
                  id="signIn-button"
                   >
                     Sign in   
                     
              </Button></a>
              </InputGroup>
            
              <InputGroup className="Contact-bar" >
              <a href="About">
              <Button className="btn-home"
                  color="primary"
                  id="About-button"

                   
                    >
                      About    
              </Button></a>
              </InputGroup>
                <li className="separator d-lg-none" />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
          
       
        
      </>
    );
  }
}

export default UserNavbar;
