import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopMenu from "./TopMenu";

export default class TemplateExplore extends Component {
  render() {
    console.log(this.props);
    return (
      <Container fluid>
        <Row className="border">
          <TopMenu />
        </Row>
        <Container className="mt-3">
          <Row >{this.props.children}</Row>
        </Container>
      </Container>
    );
  }
}

