import React from "react";
import axios from "axios";
import decode from "jwt-decode";
import { Player } from 'video-react';


// reactstrap components
import {
  Button,
  Card,
  CardImg,
  CardFooter,
  CardText,
  Row,
  Col,

} from "reactstrap";

class WatchMovies extends React.Component {

  componentDidMount(){
    const { player } = this.refs.player.getState();
    const {movie} = this.props.location.state
    console.log(movie._id)
    console.log(this.refs.player)
    const token = localStorage.getItem('cptoken');
    const payload = decode(token)
    console.log(payload)
    
  }
  handleDelete = e => {
    console.log(this.refs.player.play())
  }
  handleD = e => {
    const token = localStorage.getItem('cptoken');
    const payload = decode(token)
    const {movie} = this.props.location.state;
    console.log(payload.userId)
    console.log(movie._id)
    const userId = payload.userId
    const movieId = movie._id;

    axios.put(`/movies/watchedTime/${movieId}`)
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })

    axios.post('/watched', {userId, movieId})
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  

  render() {
      const {movie} = this.props.location.state
    return (
      <>
        <div className="container-fluid bg-black">
          

          <div className="col-md-12 mx-auto pt-5">
          <Row className="" >
            <div className="col-md-12 mx-auto py-5">
              <Player
                  ref="player"
                  width="80%"
                  playsInline
                  poster="/assets/bg5.jpg"
                  src={`/files/${movie.filename}`}
                  position="center"
                  LoadingSpinner
                  onEnded={this.handleD}
              />
              
            </div>
          </Row>
          <Row>
            <div className="display-4 text-Movie-white col-md-12 py-5">Similar Movies <hr/></div>
              <Col md="3 "  sm="6" className="" >
                <Card className="card-user card-transparent">
                  <CardImg top src={require("assets/img/now1.jpg")}></CardImg>
                  <CardText className="py-3 px-3">
                    <div className="card-description">
                      Unlimited entertainment, one low price Stream and download as much as you want, no extra fees.
                    </div>
                  </CardText>
                  <CardFooter>
                    <div className="button-container  py-3"><a href="watch">
                      <Button className="btn-fill btn-movie " color="primary" >
                        Watch  
                      </Button></a>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3 "  sm="6" className="" >
                <Card className="card-user  card-transparent">
                  <CardImg top src={require("assets/img/now1.jpg")}></CardImg>
                  <CardText className="py-3 px-3">
                    <div className="card-description">
                      Unlimited entertainment, one low price Stream and download as much as you want, no extra fees.
                    </div>
                  </CardText>
                  <CardFooter>
                    <div className="button-container  py-3"><a href="watch">
                      <Button className="btn-fill btn-movie " color="primary" >
                        Watch  
                      </Button></a>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3 "  sm="6" className="" >
                <Card className="card-user  card-transparent">
                  <CardImg top src={require("assets/img/now1.jpg")}></CardImg>
                  <CardText className="py-3 px-3">
                    <div className="card-description">
                      Unlimited entertainment, one low price Stream and download as much as you want, no extra fees.
                    </div>
                    </CardText>
                  <CardFooter>
                    <div className="button-container  py-3"><a href="watch">
                      <Button className="btn-fill btn-movie " color="primary" >
                        Watch  
                      </Button></a>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3 "  sm="6" className="" >
                <Card className="card-user card-transparent">
                  <CardImg top src={require("assets/img/now1.jpg")}></CardImg>
                  <CardText className="py-3 px-3">
                    <div className="card-description">
                      Unlimited entertainment, one low price Stream and download as much as you want, no extra fees.
                    </div>
                  </CardText>
                  <CardFooter>
                    <div className="button-container  py-3"><a href="watch">
                      <Button className="btn-fill btn-movie " color="primary" >
                        Watch  
                      </Button></a>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3 "  sm="6" className="" >
                <Card className="card-user card-transparent">
                  <CardImg top src={require("assets/img/now1.jpg")}></CardImg>
                    <CardText className="py-3 px-3">
                      <div className="card-description">
                        Unlimited entertainment, one low price Stream and download as much as you want, no extra fees.
                      </div>
                    </CardText>
                    <CardFooter>
                      <div className="button-container  py-3"><a href="watch">
                        <Button className="btn-fill btn-movie " color="primary" >
                          Watch  
                        </Button></a>
                      </div>
                    </CardFooter>
                  </Card>
              </Col>
              <Col md="3 "  sm="6" className="" >
              <Card className="card-user card-transparent">
                <CardImg top src={require("assets/img/now1.jpg")}></CardImg>
                  <CardText className="py-3 px-3">
                    <div className="card-description">
                      Unlimited entertainment, one low price Stream and download as much as you want, no extra fees.
                    </div>
                    </CardText>
                  <CardFooter>
                    <div className="button-container  py-3"><a href="watch">
                      <Button className="btn-fill btn-movie " color="primary" >
                        Watch  
                      </Button></a>
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

export default WatchMovies;

