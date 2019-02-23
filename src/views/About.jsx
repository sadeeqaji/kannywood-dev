import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardText,
  Row,
  Col
} from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid bg-white">
          <Row className="py-5">
            <Col md="10 mx-auto py-5">
              <Card className="p-5 bg-white "
                >
                <CardHeader>
                  <h2 className="display-4 text-dark text-center">ABOUT US</h2>
                </CardHeader>
                <CardText><p className="display-5 text-dark">Kannywoodtv is an entertainment platform offering a full range of services that are empowering, informative,  and of course innovative in the transformational way of edutainment.
We broadcast quality content with powerful messages of empowerment, spirit, and love that will inspire a new way of thinking... We aim at bringing positive change in television entertainment through promotion and upliftment of our social norms and values using informative, educative and innovative ideas. Operating successful business venture while promoting Hausa and other African indigenous languages and culture via films and Music. We Tell African story at its best.</p></CardText>
                <CardFooter className="align-self-center py-3"><a href="register">
                  <Button className="btn-fill" color="primary">
                     Start Watching 
                  </Button></a>
                </CardFooter>
              </Card>
            </Col>   
          </Row> 

        </div>
        
      </>
    );
  }
}

export default About;

