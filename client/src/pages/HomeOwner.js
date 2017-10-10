 
 import React, { Component } from "react";
 import Header from "../components/Header";
 import Nav from "../components/Nav";
 import Jumbotron from "../components/Jumbotron";
 import DeleteBtn from "../components/DeleteBtn";
 import API from "../utils/API";
 import { Col, Row, Container } from "../components/Grid";
 import { List, ListItem } from "../components/List";
 import { Input, TextArea, FormBtn } from "../components/Form";
 import H from "../css/H.css";
 import Background from "../images/entrance1.jpeg";

    class Request extends Component {


  // Setting our component's initial state
   state = {
    nhname: "",
    address: "",
    request: "",
    status: "",
    allrequests: []
  };

  // When the component mounts, load all requests and save them to this.state.request
  componentDidMount() {
    this.loadrequest();
  }

  // Loads all requests  and sets them to this.state.requests
  loadrequest = () => {
    API.getRequest()
      .then(res =>
        this.setState({ allrequests: res.data, nhname: "", address: "", request: "", status: "" })
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
    if (this.state.nhname && this.state.address && this.state.request) {
      API.saveRequest({
        nhname: this.state.nhname,
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
        <Row className="Background">
            <Row>
          <Col size="md-12">
              <h1>Welcome Home.</h1> 
                  </Col>
            </Row>
            <Row>
                  <Col size="md-6">
                      <h2>Create Request</h2>
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
          <Col size="md-6">
              <h2>My Requests</h2>
            {this.state.allrequests.length ? (
              <List>
                {this.state.allrequests.map(request => {
                  return (
                    <ListItem key={request._id}>
                      <a href={"/request/" + request._id}>
                        <strong>
                          {request.nhname} by {request.address}
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
            </Row>
          <Col size="md-12">
              <h2>Recomended Companies</h2>
                <h3>Plumbers</h3>
                <h4>Troys Plumbing
                    123 Plumbing Street
                    Orlando, Florida 32822</h4>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

    class Company extends Component {


  // Setting our component's initial state
   state = {
    ctype: "",
    cname: "",
    cnumber: "",
    caddress: "",
    allcompanies: []
  };

  // When the component mounts, load all requests and save them to this.state.request
  componentDidMount() {
    this.loadrequest();
  }

  // Loads all requests  and sets them to this.state.requests
  loadrequest = () => {
    API.getCompany()
      .then(res =>
        this.setState({ allcompanies: res.data, ctype: "", cname: "", cnumber: "", caddress: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a request from the database with a given id, then reloads request from the db
  deleteCompany = id => {
    API.deleteCompany(id)
      .then(res => this.loadCompany())
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
    if (this.state.ctype && this.state.cname && this.state.cnumber && this.state.caddress) {
      API.saveRequest({
        ctype: this.state.ctype,
        cname: this.state.cname,
        cnumber: this.state.cnumber,
        caddress: this.state.caddress      
      })
        .then(res => this.loadRequest())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
        
      <Container fluid>
        <Row className="Background">

            <Row>
                  <Col size="md-6">
                      <h2>Add Company</h2>
            <form>
              <Input
                value={this.state.ctype}
                onChange={this.handleInputChange}
                name="Company Type"
                placeholder="Company Type (required)"
              />
      
              <Input
                value={this.state.cname}
                onChange={this.handleInputChange}
                name="Company Name"
                placeholder="Company Name (required)"
              />
              <Input
                value={this.state.cnumber}
                onChange={this.handleInputChange}
                name="Company Number"
                placeholder="Company Number (required)"
              />        
               <Input
                value={this.state.caddress}
                onChange={this.handleInputChange}
                name="Company Address"
                placeholder="Company Address (required)"
              />         
              <FormBtn
                disabled={!(this.state.ctype && this.state.cname && this.state.cnumber && this.state.caddress)}
                onClick={this.handleFormSubmit}
              >
                Submit Company
              </FormBtn>
            </form>
                  </Col>
          <Col size="md-6">
              <h2>My Companies</h2>
            {this.state.allcompanies.length ? (
              <List>
                {this.state.allcompanies.map(company => {
                  return (
                    <ListItem key={Company._id}>
                      <a href={"/Company/" + company._id}>
                        <strong>
                          {company.nhname} by {company.address}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteCompany(company._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
            </Row>
          <Col size="md-12">
              <h2>Recomended Companies</h2>
                <h3>Plumbers</h3>
                <h4>Troys Plumbing
                    123 Plumbing Street
                    Orlando, Florida 32822</h4>
            
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Request; 
