import React from "react";
import axios from "axios";
import Slider from "react-slick";
import { BrowserRouter, Route, Link } from 'react-router-dom'

// reactstrap components
import {
  Button,
  Card,
  CardImg,
  CardFooter,
  CardText,
  Row,
  Col,
  CardImgOverlay,
  CardTitle
} from "reactstrap";

class responsive extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        movies: [],
        featuredMovies: [],
        currentTime: null,
        selectedMovie: []
      }
  }

componentDidMount() {



  axios.get('/movies')
  .then((result) => {
    //console.log(result.data)
    result.data.map(movie => {
      if(movie.featuredMovie === true){
        this.state.featuredMovies.push(movie)
        //console.log(this.state.featuredMovies)
      }
      return;
    })

     this.setState({movies: result.data})
    // console.log(this.state.movies[0]);
    //state: {movie}
  })
}

handleD () {
  console.log(this.state.selectedMovie)
}

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const {selectedMovie} = this.state.selectedMovie
    return (

      <div className="container-fluid ">
          <div className="col-md-11 mx-auto pt-5">
          <div className="display-4 text-Movie-white col-md-12 py-5">Featured Movies <hr/></div>
          
      <Slider {...settings}>
        {this.state.featuredMovies.map(movie =>
        <div  className="" key={movie._id}>

           <Card inverse>
        <CardImg  src={`/files/${movie.thumbnail}`} alt="Card image cap" />
        <CardImgOverlay className="movie-list-overlay">
          <CardTitle>{movie.MovieName}</CardTitle>
          <CardText>{movie.Description}</CardText>
          <CardText>
            <small>
            <Link 
              to={{
              pathname: "watch",
              state: { movie: movie }
            }}
          >
                    <Button className="btn-fill btn-movie " color="primary" onClick={movie}>
                      Watch  
                    </Button></Link></small>
          </CardText>
        </CardImgOverlay>
      </Card>
        </div>
        )}
      </Slider>
       <div className="display-4 text-Movie-white col-md-12 py-5">Trending Movies <hr/></div>

      <Slider {...settings}>
          {this.state.movies.map(movie =>
        <div  className="" key={movie._id}>
          <Card inverse >
            <CardImg  src={`/files/${movie.thumbnail}`} alt="Card image cap" />
            <CardImgOverlay className="movie-list-overlay">
              <CardTitle>{movie.MovieName}</CardTitle>
              <CardText>{movie.Description}</CardText>
          <CardText>
            <small>
            <Link 
              to={{
              pathname: "watch",
              state: { movie: movie }
            }}
          >
                    <Button className="btn-fill btn-movie " color="primary">
                      Watch  
                    </Button></Link></small>
          </CardText>
        </CardImgOverlay>
      </Card>
        </div>
        )}
      </Slider>
      <Row>
        <div className="display-4 text-Movie-white col-md-12 py-5">Trending Movies <hr/></div>
        {this.state.movies.map(movie =>
          <Col md="3" sm="6" className="" key={movie._id}>
             <Card inverse >
                <CardImg  src={`/files/${movie.thumbnail}`} alt="Card image cap" />
                <CardText className="py-3 px-3">
                  <div className="card-description">

                    Unlimited entertainment, one low price Stream and download as much as you want, no extra fees.
                  </div>
                  </CardText>
                <CardFooter>
                  <div className="button-container  py-3"><Link 
              to={{
              pathname: "watch",
              state: { movie: movie }
            }}
          >
                    <Button className="btn-fill btn-movie " color="primary" >
                      Watch  
                    </Button></Link>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            )}
      </Row>
      </div>
      </div>

    );
  }
}
export default responsive;

