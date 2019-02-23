import React from "react";
import axios from "axios";
import decode from "jwt-decode";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  CustomInput
} from "reactstrap";

class MovieUpload extends React.Component {
  constructor(){
    super();
      this.state = {
        name: '',
        Category: '',
        Description: '',
        file1: null,
        file2: null,
        message: [],
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
    
    const {name, Category, Description, file1, file2} = this.state;

      axios.post('/upload', { name, Category, Description, file1, file2 })
      .then((result) => {
        //console.log(result);
        this.setState({message: result.data})
    
      })
      .catch((err) => {
        console.log("Network error");
        this.setState({message: "Network error"})
      })

  }

  

  render() {
    const {
      name,
      Category,
      Description,
      file1,
      file2
    } = this.state
    
    return (
      <>
        <div className="content">
          <Row>
            <Col md="10 mx-auto">
              <Card>
                <CardHeader>
                  <h5 className="title">Upload Movie</h5>
                </CardHeader>
                <CardBody>
                  <Form action="http://157.230.132.76:5000/upload" method="post" encType="multipart/form-data">
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Movie Title</label>
                          <Input
                            name ="name" 
                            id="name"
                            placeholder="Movie Title"
                            type="text"
                            value={name}
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col
                      >
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                            <label>Movie category</label>
                              <Input 
                                type="select" 
                                name="Category"   
                                className="label" 
                                onChange={this.onChange}
                                id="Category"
                                >
                                <option value={Category}>Select</option>
                                <option>Drama</option>
                                <option>Culture</option>
                                <option>Action</option>
                                <option>Documentary</option>
                                <option>Sci fi</option>
                                </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                   
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>Movie Description</label>
                          <Input
                            cols="80"
                            name="Description"
                            value={Description} 
                            onChange={this.onChange}
                            rows="4"
                            type="textarea"
                            id="Description"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label htmlFor="forfileupload">
                            Movie
                          </label>
                  <CustomInput 
                    type="file" 
                    name="file"
                    value={file1}   
                    accept=".mp4,.3gp,.wmv, .avi, .mpeg" 
                    onChange={this.onChange}
                    id="file" 
                  />
        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label htmlFor="forfileupload">
                            Poster
                          </label>
                  <CustomInput 
                    type="file" 
                    name="file"
                    value={file2}   
                    accept=".jpg,.png,.jpeg, " 
                    onChange={this.onChange}
                    id="file"
                    />
        </FormGroup>
                      </Col>
                    </Row>
                     <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    upload
                  </Button>
                </CardFooter>
                  </Form>
                </CardBody>
               
              </Card>
            </Col>
            
          </Row>
        </div>
      </>
    );
  }
}

export default MovieUpload;
