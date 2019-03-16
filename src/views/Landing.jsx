import React from "react";
import LiveChat from 'react-livechat';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardImg,
  CardFooter,
  CardText,
  Row,
  Col
} from "reactstrap";

class Landing extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid bg-solid">
          <Row className="align-items-center h-100">
            <Col md="10 mx-auto py-5">
              <Card className="p-5 card-light">
                <CardHeader>
                  <h2 className="display-1">The Best of Hausa Movies</h2>
                  <p className="display-5">Watch thousands of Hausa movies and series on all your devices without paying more</p>
                </CardHeader>
                
                <CardFooter><Link to="register">
                  <Button className="btn-fill" color="primary">
                     Start Watching 
                  </Button></Link>
                </CardFooter>
              </Card>
            </Col>   
          </Row> 

         
        </div>


         <div className="container-fluid bg-white py-5">
         <div className="col-md-8 mx-auto py-5">
         <Row >
          <Col md="6" className="" >
            <Card className="card-user bg-white">
              <CardImg top src={require("assets/img/now1.jpg")}></CardImg>
                <CardText className="py-3 px-3">
                  <div className="card-description">
                    Unlimited entertainment, one low price Stream and download as much as you want, no extra fees.
                  </div>
                  </CardText>
                <CardFooter>
                  <div className="button-container  py-3"><Link to="register">
                    <Button className="btn-fill " color="primary" >
                      Watch all 
                    </Button></Link>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="6">
             <Card className="card-user bg-white">
              <CardImg top src={require("assets/img/now1.jpg")}></CardImg>
                <CardText className="py-3 px-3">
                  <div className="card-description">
                      New movie alerts and streams beyond what you imagine. Be the first to know every update,stay ahead of your peers 
                    </div>
                  </CardText>
                <CardFooter>
                  <div className="button-container py-3 "><Link to="register">
                    <Button className="btn-fill " color="primary" type="submit">
                      Sign Up
                    </Button> </Link>
                  </div>
                </CardFooter>
              </Card>
            </Col>  
          </Row>
          </div>
          </div>
      </>
    );
  }
}

export default Landing;

