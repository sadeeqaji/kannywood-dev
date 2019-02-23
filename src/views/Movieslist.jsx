import React from "react";
import axios from "axios";
import decode from "jwt-decode";

// reactstrap components
import {
  Table,
  Row,
  Col,
  Button
} from "reactstrap";

class Movieslist extends React.Component {
    constructor(props){
    super(props);
      this.state = {
        movies: []
      }
  }
componentDidMount() {
  axios.get('/movies/all')
  .then((result) => {
    console.log(result.data)
     this.setState({movies: result.data})
     console.log(this.state.movies)
  })
//const cptoken = localStorage.getItem('cptoken');
          //const payload = decode(cptoken);
          //console.log(payload);
}

handleDelete = (e) => {
    const id  = "5c5772261c995f10561dced0"
    axios.delete(`movies/delete/${id}`)
  .then((result) => {
    console.log(result.data)
  })

}

  componentDidUpdate(){
    axios.get('/movies/all')
  .then((result) => {
    //console.log(result.data)
     this.setState({movies: result.data})
     //console.log(this.state.movies)
  })
  //console.log(this.props.payload)
  }

  render() {
    return (
      <>
        <div className="content py-5">
          <Row>
            <Col md="12 bg-white txt-dark pt-5">
             
                  <Table id="example" className="tablesorter display txt-dark py-5" responsive>
                    <thead className="txt-dark">
                      <tr >
                        <th>Movie Name</th>
                        <th>Movie Category</th>
                        <th>Views</th>
                        <th>Rating</th>
                        <th>Number of purchase</th>
                        <th>Date Uploaded</th>
                        <th>Uploaded By</th>
                        <th>Verification</th>
                        <th>Delete</th>
                    </tr>
            
                    </thead>
                    <tbody>
                    {this.state.movies.map(movie => 
                    <tr key={movie.id}>
                <td>{movie.MovieName}</td>
                <td>{movie.category}</td>
                <td>{movie.views}</td>
                <td>{movie.rating}</td>
                <td>{movie.purchased}</td>
                <td>{movie.uploadedDate}</td>
                <td>{movie.uploadedByUser}</td>
                <td>{movie.isVerifiedVideo === true ? ( <p>Verified</p>) : (<Button >Verify</Button>)} </td>
                <td><Button className="btn-danger" onClick={this.handleDelete}>D</Button></td>
            </tr>
            )}
                    </tbody>
                      <tfoot>
        </tfoot>
                  </Table>
                
            </Col>
            
          </Row>
        </div>
      </>
    );
  }
}

export default Movieslist;
