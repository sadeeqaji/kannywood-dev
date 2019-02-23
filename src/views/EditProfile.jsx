import React from "react";

// reactstrap components
import {
  Col,
  Row,
  Form,
  FormGroup,
  Input,
  Button,
  Card,
  CardBody,
  CardText,
  CardFooter
} from "reactstrap";

class EditProfile extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid ">
          <Row  className="py-5">
          <Col md="5 mx-auto py-5" className="offset-1" >
            <Card className="card-user " >
                <h2 className="text-center py-5"> Edit Profile</h2>
                  <CardText className="py-3 px-3">
                    <div className="card-description">
                     <CardBody>
                      <Form>
                        <Row>
                          <div className=" col-md-12 " >
                          </div>
                          <div className="pl-md-1" md="12">
                            <FormGroup>
                              <label>Name</label>
                              <Input
                                placeholder=" Name"
                                type="text"
                              />
                            </FormGroup>
                          </div>
                          <div className="pl-md-1" md="12">
                            <FormGroup>
                              <label htmlFor="exampleInputEmail1">
                                Email address
                              </label>
                              <Input placeholder="mike@email.com" type="email" />
                            </FormGroup>
                          </div>
                              <div className="pl-md-1" md="12" >
                                  <FormGroup>
                                    <label>Phone Number</label>
                                    <Input
                                      placeholder="Phone Number"
                                      type="text"
                                    />
                                  </FormGroup>
                              </div>               
                          <CardFooter className="justify-content-center  col-lg-12 col-md-12">
                            <div className="button-container   py-3">
                              <Button className="btn-fill" color="primary" type="submit">
                                 Update
                              </Button>
                            </div> 
                          </CardFooter>
                        </Row>
                      </Form>
                    </CardBody>
                  </div>
                </CardText>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default EditProfile;

