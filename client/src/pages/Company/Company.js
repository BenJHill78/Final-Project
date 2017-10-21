 
 import React, { Component } from "react";
 import Header from "../components/Header";
 import Nav from "../components/Nav";
 import Navpills from "../components/Navpills";
 import Jumbotron from "../components/Jumbotron";
 import DeleteBtn from "../components/DeleteBtn";
 import API from "../utils/API";
 import { Col, Row, Container } from "../components/Grid";
 import { List, ListItem } from "../components/List";
 import { Input, TextArea, FormBtn } from "../components/Form";
 import H from "../css/H.css";
 import Background from "../images/entrance1.jpeg";

    class Companies extends Component {

  // Setting our component's initial state
   state = {
    allCompanies: [],
    ctype: "",
    cname: "",
    cnumber: "",
    caddress: ""
  };

  // When the component mounts, load all requests and save them to this.state.request
  componentDidMount() {
    this.loadCompanies();
  }

  // Loads all requests  and sets them to this.state.requests
  loadCompanies = () => {
    API.getCompanies()
        .then(res => {
         if(res.data.statusCode == 401){
          this.props.history.push("/login");
        }
        else {
         console.log("user:", res.data.sess);
          this.setState({currentUser: res.data.sess.passport.user, allCompanies: res.data.results, ctype: "", cname: "", cnumber: "", caddress: "" })
        }
      })
      .catch(err => console.log(err));
  };

  // Deletes a request from the database with a given id, then reloads request from the db
  deleteCompany = id => {
    API.deleteCompany(id)
      .then(res => this.loadCompanies())
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
        <div>
        <Nav userInfo={this.state.currentUser } />
        <Container fluid>
            <Row>
                  <Col size="md-6">
                      <h2>Add Company</h2>
            <form>
              <Input
                value={this.state.ctype}
                onChange={this.handleInputChange}
                name= "Company Type"
                placeholder= "Company Type (required)"
              />
              <Input
                value={this.state.cname}
                onChange={this.handleInputChange}
                name= "Company Name"
                placeholder= "Company Name (required)"
              />
              <Input
                value={this.state.cnumber}
                onChange={this.handleInputChange}
                name= "Company Number"
                placeholder= "Company Number (required)"
              />        
               <Input
                value={this.state.caddress}
                onChange={this.handleInputChange}
                name= "Company Address"
                placeholder= "Company Address (required)"
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
                    <ListItem key={company._id}>
                      <a href={"/Company/" + company._id}>
                        <strong>
                          {allCompanies.ctype} by {AllCompanies.cname}
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
    </Container>
    );
  }
}


export default Companies; 

