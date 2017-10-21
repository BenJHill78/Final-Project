import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import Nav from "../../components/Nav";
 import H from "../../css/H.css";
 import Background from "../../images/entrance1.jpeg";

class Register extends Component {
  state = {
    username: "",
    password: "",
    currentUser: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      console.log(this.state);
    if (this.state.username && this.state.password) {
      API.register({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => {
          console.log(res.data.user);
          if(res.data.user){
            this.props.history.push('/Requests');
          }
          else {
            console.log("no user");
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="background">
        <Nav userInfo={this.state.currentUser} />
        <Container fluid>
          <Row>
            <Col size="md-4">
            </Col>
                    <Col size="md-4">

                <h1>
                  Register
                </h1>
                    <form>
              <Input
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
              <Input
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="password (required)"
              />
              <FormBtn
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Login
              </FormBtn>
            </form>
            </Col>
                    <Col size="md-4">
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
