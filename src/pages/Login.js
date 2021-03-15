import React, { Component } from "react";
import Template from "../components/Template";

import { Tab, Row, Col, Container } from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <Template {...this.props}>
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              <Col sm={9} className="side-right">
                <Container>
                  <h1>Login Activity</h1>
                  <strong>Was This You?</strong>
                </Container>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </Template>
    );
  }
}
