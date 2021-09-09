import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <Row className="g-3">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="drink name">
              <Form.Control 
                type = 'text'
                name = 'name'
                placeholder = 'Drink Name' />
            </FloatingLabel>
          </Col>

          <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="drink description">
              <Form.Control 
                type = 'text'
                name = 'description'
                placeholder = 'Drink Description' />
            </FloatingLabel>
          </Col>

          <Col md>
          <FloatingLabel controlId="floatingSelectGrid" label="How many drinks?">
            <Form.Select name = 'quantity' aria-label="Floating label select example">
              <option>Select quantity (3 max per order)</option>
              <option value = "1" >1</option>
              <option value = "2" >2</option>
              <option value = "3" >3</option>
            </Form.Select>
          </FloatingLabel>

          </Col>
        </Row>
        
        <div className="d-grid gap-2">
          <Button type = 'submit' variant="outline-success" size="lg">
          {props.buttonText}
          </Button>
        </div>

      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;


{/* <Row className="g-2">
  <Col md>
    <FloatingLabel controlId="floatingInputGrid" label="drink name">
      <Form.Control type="text" placeholder="name@example.com" />
    </FloatingLabel>
  </Col>
  <Col md>
    <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
      <Form.Select aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
  </Col>
</Row> */}

{/* <div className="d-grid gap-2">
  <Button variant="primary" size="lg">
    Block level button
  </Button>
</div> */}


// <FloatingLabel controlId="floatingInputGrid" label="drink quantity">
// <Form.Control 
//   type = 'text'
//   name = 'quantity'
//   placeholder = 'Drink Quantity' />
// </FloatingLabel>