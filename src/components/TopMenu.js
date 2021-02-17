import React, { Component } from 'react'
import {
  Navbar,
  Button,
  Form,
  FormControl,
  Container,
  Row,
  Col,
  Tab,
  Image,
  Nav,
} from "react-bootstrap";

export default class TopMenu extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="ta-1">
        <Navbar.Brand>
          <img
            alt="Instagram"
            className="s4Iyt"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            srcSet="/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png 2x"
            cursor="pointer"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
