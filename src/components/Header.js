import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar fixed="right" bg="info" variant="dark">
    <Nav>
      <div class="buttons">
        <Button variant="outline-light" size="sm" margin="10px" href="#action1">Home</Button>
        <Button variant="outline-light" size="sm" margin="10px" href="#action2">Drinks</Button> 
        <Button variant="outline-light" size="sm" margin="10px" href="#action3">IDK another Button</Button>
      </div>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button  size="sm" margin="10px" variant="outline-success">Search</Button>
    </Form>
  </Navbar>  
  );
}

export default Header;
