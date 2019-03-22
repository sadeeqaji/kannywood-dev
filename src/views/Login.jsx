import React from "react";
import axios from "axios";
import decode from "jwt-decode";
import { Router, Route, Switch, Redirect } from "react-router-dom";


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


const checkAuth = () => {
    const token = localStorage.getItem('cptoken');
    if(!token) {
      return false;
    }
    try {
      const payload = decode(token);
      if(payload.exp < new Date.getTime() / 1000) {
        return false;
      }
    }
    catch(e){
      return false;
    }
    return true;

  }

//console.log(checkAuth())

class Register extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      isLoading: true,
      token: '',
      email: '',
      password: '',
      message: [],
      isSignedin: false
    };
  }

  

  //form data
    onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }



    onSubmit = (e) => {
      e.preventDefault()
      const {email, password} = this.state;

      axios.post('http://104.248.212.163:5000/user/login', { email, password})
      .then((result) => {
        console.log(result);
        this.setState({message: result.data})
        if(result.request.status === 200) {
          const token = decode(result.data)
          console.log(token)
          if(token.isUser){
            this.props.history.push("/user/movie");
          localStorage.setItem('cptoken', result.data)
          this.setState();
          }
          
        }
        else if (result.status === 500) {
            this.setState({message: "Network error"});
        } {

        }
        //console.log(result)
      })
      .catch((err) => {
        console.log("Network error");
        this.setState({message: "Network error"})
      });

    }


  render() {
    const {
      email,
      password,
    } = this.state
    return (
      <>
      
        <div className="container-fluid bg-solid">
          <Row className="py-5" >
          <Col md="5" className="offset-1 mx-auto py-5" >
            <Card className="card-user card-transparent">
              
                <CardText className="py-3 px-3">
                  <div className="card-description">
                     <CardBody>
                     <h2 className="text-center"> Sign In</h2>
                  <Form onSubmit={this.onSubmit}>
                    {this.state.message.length > 0 &&
                      <div class="alert alert-warning alert-dismissible" role="alert ">
                        { this.state.message }
                      </div>
                    }
                      <Col className="pl-md-1" md="12">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input 
                            name="email"
                          value={email}
                          placeholder="mike@email.com"
                          type="email"
                          onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                    <Col className="pl-md-1" md="12">
                        <FormGroup>
                          <label>Password</label>
                          <Input
                            name="password"
                            value={password}
                            placeholder="Password"
                            type="password"
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                    <CardFooter>
                  <div className="button-container  py-3">
                    <Button className="btn-fill " color="primary" type="submit">
                      Sign in
                    </Button>
                  </div>
                  <p className="text-center"> Don't have Account. Sign up <a href="register"> here </a> |  <a href="reset"> Forgot password </a> </p>
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

export default Register;

