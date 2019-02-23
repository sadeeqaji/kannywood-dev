import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,  
  Col
} from "reactstrap";

class Subscribe extends React.Component {
  render() {
    return (
      <>
        <div className="container pt-5">
          <Row className="pt-5">
            <Col lg="4">
              <Card className="card">
                <CardHeader>
                  <h5 className="card-category">Basic</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-coins text-info" />{" "}
                     ₦  763,215
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="">
                    
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card">
                <CardHeader>
                  <h5 className="card-category">Standard</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-coins text-primary" />{" "}
                     ₦ 3,500
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="">
                    
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card">
                <CardHeader>
                  <h5 className="card-category">Primium</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-coins text-success" />  ₦ 12,100
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    
                  </div>
                </CardBody>
              </Card>
            </Col>
             <Col md="12">
              <Card>
                
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center"></th>
                        <th>Basic</th>
                        <th>Standard</th>
                        <th>Primium</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td >HD available</td>
                        <td><li className="tim-icons icon-simple-remove"> </li></td>
                        <td><li className="tim-icons icon-check-2"> </li></td>
                        <td><li className="tim-icons icon-check-2"> </li></td>
                      </tr>
                      <tr>
                        <td>Ultra HD available</td>
                        <td><li className="tim-icons icon-simple-remove"> </li></td>
                        <td><li className="tim-icons icon-check-2"></li> </td>
                        <td><li className="tim-icons icon-check-2"> </li></td>
                      </tr>
                      <tr>
                        <td>Screens you can watch on at the same time</td>
                        <td>1</td>
                        <td>2</td>
                        <td> 4</td>
                      </tr>
                      <tr>
                        <td>Watch on your laptop, TV, phone and tablet</td>
                        <td><li className="tim-icons icon-check-2"> </li></td>
                        <td><li className="tim-icons icon-check-2"></li> </td>
                        <td><li className="tim-icons icon-check-2"></li> </td>
                      </tr>
                      <tr>
                        <td>Unlimited movies and TV shows</td>
                        <td><li className="tim-icons icon-check-2"> </li></td>
                        <td><li className="tim-icons icon-check-2"></li> </td>
                        <td><li className="tim-icons icon-check-2"></li> </td>
                      </tr>
                      <tr>
                        <td>Cancel anytime</td>
                        <td><li className="tim-icons icon-check-2"> </li></td>
                        <td><li className="tim-icons icon-check-2"></li> </td>
                        <td><li className="tim-icons icon-check-2"></li> </td>
                        </tr>
                      <tr>
                        <td>First month free</td>
                        <td><li className="tim-icons icon-check-2"> </li></td>
                        <td><li className="tim-icons icon-check-2"></li> </td>
                        <td><li className="tim-icons icon-check-2"></li> </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Subscribe;

