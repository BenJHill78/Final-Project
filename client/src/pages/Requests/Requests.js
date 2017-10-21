import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";

class Requests extends Component {
  state = {
    requests: [],
    nhname: "",
    address: "",
    requestname: "",
    status: ""
  };

  componentDidMount() {
    this.loadRequests();
  }

  //loadRequests = () => {
    //API.getRequests()
      //.then(res => {
        //if(res.data.statusCode == 401){
         // this.props.history.push("/login");
       // }
        //else {
       //   console.log("user:", res.data.sess);
      //    this.setState({currentUser: res.data.sess.passport.user, requests: res.data.results, nhname: "", address: "", requestname: "", status: "" })
     //   }
     // })
     // .catch(err => console.log(err));
 // };

  deleteRequests = id => {
    API.deleteRequests(id)
      .then(res => this.loadRequests())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.nhname && this.state.address) {
      API.saveBook({
        nhname: this.state.nhname,
        address: this.state.address,
        requestname: this.state.requestname,
        status: this.state.status,          
      })
        .then(res => this.loadRequests())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Nav userInfo={this.state.currentUser } />
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Requests</h1>
              </Jumbotron>
              <form>
                <Input
                  value={this.state.nhname}
                  onChange={this.handleInputChange}
                  name="Neighborhood Name"
                  placeholder="Neighborhood Name (required)"
                />
                <Input
                  value={this.state.address}
                  onChange={this.handleInputChange}
                  name="Address"
                  placeholder="Address (required)"
                />
                <TextArea
                  value={this.state.synopsis}
                  onChange={this.handleInputChange}
                  name="Request Info"
                  placeholder="Request Info (Optional)"
                />
                <FormBtn
                  disabled={!(this.state.nhname && this.state.address)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Request
              </FormBtn>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>My Requests</h1>
              </Jumbotron>
              {this.state.requests.length ? (
                <List>
                  {this.state.requests.map(requests => (
                    <ListItem key={requests._id}>
                      <Link to={"/requests/" + requests._id}>
                        <strong>
                          {requests.nhname} by {requests.address}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => this.deleteRequests(requests._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Requests;
