import React from "react";
import axios from "axios";
import decode from "jwt-decode";

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

class CpLogin extends React.Component {
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

  // checkAuth = () => {
  //   const token = localStorage.getItem('token');
  //   if(!token) {
  //     return false;
  //   }
  //   try {
  //     const payload = decode(token);
  //     if(payload.exp < new Date.getTime() / 1000) {
  //       return false;
  //     }
  //   }
  //   catch(e){
  //     return false;
  //   }
  //   return true;
  // }

  //form data
    onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }

    onSubmit = (e) => {
      e.preventDefault();
      const {email, password} = this.state;

      axios.post('/cp/login', { email, password})
      .then((result) => {
        console.log(result);
        this.setState({message: result.data})
        if(result.request.status === 200) {
          // const payload = decode(result.data);
          // console.log(payload.isVerify)
          localStorage.setItem('cptoken', result.data)
          this.props.history.push("/cp");
          this.setState();
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
      })

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
                     <h2 className="text-center">CP Sign In</h2>
                  <Form onSubmit={this.onSubmit}>
                    {this.state.message.length > 0 &&
                      <div class="alert alert-warning alert-dismissible" role="alert ">
                        { this.state.message }
                      </div>
                    }
                    <Col className="pl-md-1" md="12">
                      <FormGroup>
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

export default CpLogin;
