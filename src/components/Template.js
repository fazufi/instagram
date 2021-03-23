import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import { connect } from "react-redux";

 class Template extends Component {
  render() {
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

const mapStateToProps = (state) => {
  return { mode: state.mode };
};
export default connect(mapStateToProps )(Template);
