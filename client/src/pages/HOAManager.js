
 import React from 'react';
 import Header from "../components/Header";
 import Nav from "../components/Nav";
 import Container from "../components/Container";
 import Row from "../components/Row";
 import Col from "../components/Col";
 import API from "../utils/API";

 const HOAManager = () => (

    <div>
        <Nav />
        <Header />
    
     <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h2>Welcome to Your Community</h2>
        </Col>
      </Row>
       <Row>
        <Col size="md-12">
          <h3>HOA Management List</h3>
        </Col>
      </Row>  
   
    </Container>
    
    </div>
)

export default HOAManager;