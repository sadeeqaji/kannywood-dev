import React from "react";
import axios from "axios";

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

class CpRegister extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      password2: '',
      ErroMessage: [],
      SuccessMessage: [],
      serverError: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {providerName, email, phoneNumber, password, password2} = this.state;

    axios.post('/cp/register', {providerName, email, phoneNumber, password, password2})
    .then((result) => {
      if(!result.data.success){
        this.setState({ErroMessage: result.data[0].text})
        this.setState({SuccessMessage: []})
      }
      else {
        this.setState({SuccessMessage: "Register successfully. After verifying your we will contact you shortly"})
        this.setState({ErroMessage: []})
      }

    })
    .catch(error => {
      this.setState({serverError: "Server Error please try after sometime or contact the site Administrator"})
    })

  }


  render() {
    const {
      providerName,
      email,
      phoneNumber,
      password,
      password2
    } = this.state
    return (
      <>
        <div className="container-fluid bg-solid">




          <Row  className="py-5">
          <Col md="5 mx-auto py-5" className="offset-1" >
            <Card className="card-user card-transparent">

                <CardText className="py-3 px-3">

                  <div className="card-description">
                     <CardBody>
                     <h2 className="text-center"> CP Registrationw</h2>
                     <Form onSubmit={this.onSubmit}>
                     {this.state.ErroMessage.length > 0 &&
                       <div class="alert alert-warning alert-dismissible" role="alert">
                     { this.state.ErroMessage }
                       </div>
                     }
                     {this.state.SuccessMessage.length > 0 &&
                       <div class="alert alert-success alert-dismissible" role="alert">
                     {this.state.SuccessMessage }
                       </div>
             }
             <Col className="pl-md-1" md="12">
               <FormGroup>
                 <Input
                     type="text"
                     name="providerName"
                     value={providerName}
                     placeholder="Content Provider Name E.g F.K.D Production"
                     onChange={this.onChange}
                 />
               </FormGroup>
             </Col>

             <Col className="pl-md-1" md="12">
               <FormGroup>
                 <Input
                     type="email"
                     name="email"
                     value={email}
                     placeholder="mike@email.com"
                     onChange={this.onChange}
                 />
               </FormGroup>
             </Col>

             <Col className="pl-md-1" md="12">
               <FormGroup>
                 <Input
                 type="text"
                 name="phoneNumber"
                 value={phoneNumber}
                 placeholder="08012345568"
                 onChange={this.onChange}
                 />
               </FormGroup>
             </Col>

           <Col className="pl-md-1" md="12">
               <FormGroup>
                 <Input
                   type="password"
                   name="password"
                   value={password}
                   placeholder="Password"
                   onChange={this.onChange}
                 />
               </FormGroup>
             </Col>

             <Col className="pl-md-1" md="12">
                 <FormGroup>
                   <Input
                     type="password"
                     name="password2"
                     value={password2}
                     placeholder="Confirm Password"
                     onChange={this.onChange}
                   />
                 </FormGroup>
               </Col>
                       <CardFooter>
                     <div className="button-container  py-3">
                       <Button className="btn-fill " color="primary" type="submit">
                         Sign up
                       </Button>
                     </div>
                     <p className="text-center">Already have account. Sign in<a href="login"> here</a></p>
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

export default CpRegister;
