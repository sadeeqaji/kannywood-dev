import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class Reset extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid bg-solid">
          
              
        

          <Row className="py-5" >
          <Col md="5" className="offset-1 mx-auto py-5" >
            <Card className="card-user card-transparent">
              
                <CardText className="py-3 px-3">
                  <div className="card-description">
                     <CardBody>
                     <h2 className="text-center"> Reset Password</h2>
                  <Form>
                      <Col className="pl-md-1" md="12">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="mike@email.com" type="email" />
                        </FormGroup>
                      </Col>
                    
                    <CardFooter>
                  <div className="button-container  py-3">
                    <Button className="btn-fill " color="primary" type="submit">
                      Sign in
                    </Button>
                  </div>
                  <p className="text-center"> Have an Account. Sign in <a href="login"> here </a> | Don't have Account. Sign up <a href="register"> here </a> </p>
                </CardFooter>
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

export default Reset;

