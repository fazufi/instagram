import React, { Component } from "react";
import {
 
  Container,
  Row,
  Col,
  
} from "react-bootstrap";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";

export default class Template extends Component {
  render() {
    return (
      <Container fluid position="center">
        <Row className="border">
          <TopMenu />
        </Row>
        <Container className="mt-3">
          <Row className="border">
            <Container fluid>
              <Row>
                <Col md={3} className="px-0 mt-2">
                  <SideMenu {...this.props} />
                </Col>
                <Col md={9} className="border">
                  {this.props.tampil}
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </Container>
    );
  }
}
