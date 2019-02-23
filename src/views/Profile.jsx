import React from "react";
import decode from "jwt-decode";

// reactstrap components
import {
  Button,
  Card,
  CardFooter,
  CardText,
  CardBody,
  Row,
  Col,
} from "reactstrap";

class Profile extends React.Component {
  render() {
      const token = localStorage.getItem('token');
      const payload = decode(token);
    return (
      <>
        <div className="container-fluid ">
          

          <div className="col-md-10 mx-auto pt-5 ">
          <Row className="" >

           <Col md="6 " className=" mx-auto py-5" >
             <Card className="card-user ">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/emilyz.jpg")}
                      />
                      <a href="EditProfile" >
                      <h5 className="title ">Edit profile</h5>
                    </a>
                    <p className="description text-Movie-white">Account Info</p>
                  </div>
                  <div className="card-description px-5 ">
                   <p className="description text-Movie-white px-5">{ payload.name}</p>
                     <p className="description text-Movie-white px-5">{ payload.email}</p>
                     <p className="description text-Movie-white px-5">{ payload.phoneNumber}</p>
                    <p className="description text-Movie-white px-5">Subscription : Active</p>
                    <p className="description text-Movie-white px-5">Subscription Date: 12-03-2016 </p>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
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

export default Profile;

