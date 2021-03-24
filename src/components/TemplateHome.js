import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {  mode } from "../Helpers";
import { connect } from "react-redux";
import TopMenu from "./TopMenu";



 class TemplateHome extends Component {
  render() {
    console.log(this.props);
    return (
      <Container fluid  >
        <Row className="border">
          <TopMenu />
        </Row>
        <Container className="mt-3">
          <Row className="border">
            <Container fluid className={this.props.mode}>
              <Row>
                <Col sm={8}>{this.props.children}</Col>
                <Col sm={4}>
                  <Container className="my-profile">
                    <Card className="my-profile">
                      <Card.Header>
                        
                        <Card.Title>
                          <img
                            alt="card"
                            src={this.props.dbHome.data.user.profile_pic_url}
                            roundedCircle
                            width="25"
                            height="25" />
                          {this.props.dbHome.data.user.username}
                        </Card.Title>
                      </Card.Header>
                      
                    </Card>
                    <p>Saran untuk anda</p>
                    <Card className="people-may-you-know">
                      <Card.Header>
                        <Card.Title>
                          <img
                            alt="card"
                            src={
                              this.props.dbHome.data.user.edge_web_feed_timeline
                                .edges[4].node.owner.profile_pic_url
                            }  roundedCircle
                            width="25"
                            height="25"
                          />
                          {
                            this.props.dbHome.data.user.edge_web_feed_timeline
                              .edges[4].node.owner.username
                          }
                        </Card.Title>
                      </Card.Header>
                      <Card.Header>
                        <Card.Title>
                          <img
                            alt="card"
                            src={
                              this.props.dbHome.data.user.edge_web_feed_timeline
                                .edges[6].node.owner.profile_pic_url
                            } roundedCircle
                            width="25"
                            height="25"
                          />
                          {
                            this.props.dbHome.data.user.edge_web_feed_timeline
                              .edges[6].node.owner.username
                          }
                        </Card.Title>
                      </Card.Header>
                      <Card.Header>
                        <Card.Title>
                          <img
                            alt="card"
                            src={
                              this.props.dbHome.data.user.edge_web_feed_timeline
                                .edges[8].node.owner.profile_pic_url
                            } roundedCircle
                            width="25"
                            height="25"
                          /> 
                          {
                            this.props.dbHome.data.user.edge_web_feed_timeline
                              .edges[8].node.owner.username
                          }
                        </Card.Title>
                      </Card.Header>
                      <Card.Header>
                        <Card.Title>
                          <img
                            alt="card"
                            src={
                              this.props.dbHome.data.user.edge_web_feed_timeline
                                .edges[10].node.owner.profile_pic_url
                            } roundedCircle
                            width="25"
                            height="25"
                          />
                          {
                            this.props.dbHome.data.user.edge_web_feed_timeline
                              .edges[10].node.owner.username
                          }
                        </Card.Title>
                      </Card.Header>
                    </Card>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </Container>
    );
  }
}



export default connect(mode)(TemplateHome);