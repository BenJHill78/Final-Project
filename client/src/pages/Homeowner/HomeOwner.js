 
 import React, { Component } from "react";
 import Header from "../../components/Header/Header";
 import Nav from "../../components/Nav";
 import Jumbotron from "../../components/Jumbotron";
 import DeleteBtn from "../../components/DeleteBtn";
 import API from "../../utils/API";
 import { Col, Row, Container } from "../../components/Grid";
 import { List, ListItem } from "../../components/List";
 import { Input, TextArea, FormBtn } from "../../components/Form";
 import H from "../../css/H.css";


    class Request extends Component {


  // Setting our component's initial state
   state = {
    neighborhood: "",
    address: "",
    request: "",
    status: "",
    allrequests: []
  };

  // When the component mounts, load all requests and save them to this.state.request
  componentDidMount() {
    this.loadRequest();
  }

  // Loads all requests  and sets them to this.state.requests
  loadRequest = () => {
      console.log("load requests running");
    API.getRequests()
      .then(res =>
        this.setState({ allrequests: res.data, neighborhood: "", address: "", request: "", status: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a request from the database with a given id, then reloads request from the db
  deleteRequest = id => {
    API.deleteRequest(id)
      .then(res => this.loadRequest())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveRequest method to save the request data
  // Then reload request from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.address && this.state.request) {
      API.saveRequest({
        neighborhood: this.state.neighborhood,
        address: this.state.address,
        request: this.state.request,
        status: this.state.status      
      })
        .then(res => this.loadRequest())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
        
      <Container fluid>
        <div className= "background">
            <Row>
          <Col size="md-12">
              <h1>Welcome Home.</h1> 
                  </Col>
            </Row>
            <Row>
            <Col size="md-1">
                </Col>
            <Col size="md-4">
                      <h2>Create Request</h2>
            <form>
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="Address (required)"
              />
              <TextArea
                value={this.state.request}
                onChange={this.handleInputChange}
                name="request"
                placeholder="Request (required)"
              />
              <FormBtn
                disabled={!(this.state.address  && this.state.request)}
                onClick={this.handleFormSubmit}
              >
                Submit Request
              </FormBtn>
            </form>
                  </Col>
          <Col size="md-2">
          </Col>
          <Col size="md-4">
              <h2>My Requests</h2>
            {this.state.allrequests.length ? (
              <List>
                {this.state.allrequests.map(request => {
                  return (
                    <ListItem key={request._id}>
                      <a href={"/request/" + request._id}>
                        <strong>
                          {request.neighborhood} by {request.address}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteRequest(request._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-1">
          </Col>
            </Row>
          <Row>
          <Col size="md-12">
              <h2>Recomended Companies</h2>
          </Col>
          <Col size="md-1">
          </Col>
          <Col size="md-4">
                <h3>Plumbers</h3>
                <h4>Troys Plumbing
                    123 Plumbing Street
                    Orlando, Florida 32822</h4>
          </Col>
          <Col size="md-2">
          </Col>
          <Col size="md-4">
                <h3>Electricians</h3>
                <h4>Troys Electrical
                    123 Electrical Street
                    Orlando, Florida 32822</h4>
          </Col>
          <Col size="md-1">
          </Col>
            </Row>
          <Row>
          <Col size="md-1">
          </Col>
          <Col size="md-4">
                <h3>Painters</h3>
                <h4>Troys Painting
                    123 Painting Street
                    Orlando, Florida 32822</h4>
          </Col>
          <Col size="md-2">
          </Col>
          <Col size="md-4">
                <h3>Roofers</h3>
                <h4>Troys Roofing
                    123 Roofing Street
                    Orlando, Florida 32822</h4>
          </Col>
          <Col size="md-1">
          </Col>
            </Row>
        </div>
      </Container>
    );
  }
}




export default Request; 
