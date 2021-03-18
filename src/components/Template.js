import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopMenu, { mapDispatchToProps, mapStateToProps } from "./TopMenu";
import SideMenu from "./SideMenu";
import { connect } from "react-redux";

 class Template extends Component {
  render() {
    console.log(this.props);
    return (
      <Container className={this.props.mode} fluid>
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
                <Col md={9} >
                  {this.props.children}
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Template);
