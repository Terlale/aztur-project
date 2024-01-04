import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const StyledForm = styled(Form)`
padding-top:10px;
  width: 100%;
  box-sizing: border-box
`;

const StyledFormControl = styled(Form.Control)`
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  margin: 0px 0px 30px 0px;
  padding:10px;

  &:hover {
    border-top: none;
    border-left: none;
    border-right: none;
     }
`;

const StyledButton = styled(Button)`
width: 160px;
    height: 47px;
    border: none;
    color: white;
    background-color: #5264b8;
  border-radius: 6px;
  transition: background-color 0.1s ease-in-out;
  
  &:hover{
     background-color: #1c339f;
  }
`;

function BasicExample() {
  return (
    <StyledForm>
      <Form.Group className="mb-3" controlId="formBasicName">
        <StyledFormControl type="text" placeholder="Enter name and surname" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <StyledFormControl type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <StyledFormControl as="textarea" placeholder="Enter message" />
      </Form.Group>

      <StyledButton variant="primary" type="submit">
        Submit
      </StyledButton>
    </StyledForm>
  );
}

export default BasicExample;
