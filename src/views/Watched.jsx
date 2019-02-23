import React from "react";
import  decode from "jwt-decode";
import axios from "axios";

// reactstrap components
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  NavItem,
  Nav,
  NavLink,
  CardImgOverlay,
  Button,
  Row,
  Input,  
  Col
} from "reactstrap";

class Watched extends React.Component {
    constructor(props){
    super(props);
      this.state = {
      WatchedMovies: [],
      errorMsg: []
    };
  }
    componentDidMount(){
      const token = localStorage.getItem('cptoken');
      const payload = decode(token);
      const id = payload.userId
    axios.get(`/watched/${id}`)
      .then((result) => {
        //console.log(result.data)
        this.setState({WatchedMovies: result.data})
        console.log(this.state.WatchedMovies)
      })
      .catch((err) => {
        //console.log(err)
        this.setState({errorMsg: err})
      })
    }
    
  render() {
    return (
      <>
        <div className="container pt-5">
          <Row className="pt-5">
            <div className="col-lg-12 col-md-12 col-sm-12 py-4">
              <Nav>
                <NavItem>
                  <NavLink href="#">week</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink href="#">Month</NavLink>
                  </NavItem>
                  <NavItem> 
                  <Input
                            placeholder="Search"
                            type="text"
                          />
                  </NavItem>
            </Nav>
            </div>
          {this.state.WatchedMovies.map(WatchedMovie =>        
            <Col lg="6" md="6" sm="12" className="history-filter">
              <Card >
                <Row>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <CardHeader>
                      <Row>
                        <div className="col-lg-6 col-md-6 col-sm-6"><h5 className="card-category">Rating</h5>
                          <CardTitle tag="h5">
                            <i className="tim-icons icon-shape-star text-success" />  {WatchedMovie.movieId.rating}
                          </CardTitle>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6"><h5 className="card-category">Date</h5>
                          <CardTitle tag="h5">
                            <i className="tim-icons icon-video-66 text-success" />  {WatchedMovie.Date}
                          </CardTitle>
                        </div> 
                        <div className="col-lg-12 col-md-12 col-sm-12"><h5 className="CardTitle">{WatchedMovie.movieId.MovieName}</h5>
                          <p className="card-category">
                             {WatchedMovie.movieId.description}
                          </p>
                        </div>
                      </Row>
                    </CardHeader>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 test-grey ">
                    <CardImg className=""  src={`/files/${WatchedMovie.movieId.thumbnail}`}></CardImg>
                    <CardImgOverlay className="clear-grey  h-100 d-flex " >
                     
                        <Button className=" btn-history    " > <a href="watch">
                          Watch  </a>
                        </Button>
                      
                    </CardImgOverlay>
                  </div>
                </Row>
              </Card>
            </Col>
             )}
             
            
           
            
           
          </Row>
        </div>
      </>
    );
  }
}

export default Watched;

