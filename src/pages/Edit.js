import React, { Component } from "react";
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
import Template from "../components/Template";

export default class Edit extends Component {
  render() {
    return (
      <Template
        {...this.props}
        tampil={
          <Container>
            <Row>
              <Col md={2}>
                <img
                  className="float-right"
                  src="https://instagram.fada2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fada2-1.fna.fbcdn.net&_nc_ohc=SkQvnEdYBN8AX-tYmCd&oh=c42861bdaa4bb6a18094f8bf99bb7f78&oe=6057FD8F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                  alt="pp akun"
                  width="40"
                  height="40"
                />
              </Col>
              <Col md={10}>
                <h5 className="mb-0">UserName Account</h5>
                <p className="mt-0">
                  <b>
                    {/* <a href="/explore/locations/"><div class="_7UhW9  PIoXz       MMzan   _0PwGv         uL8Hv         ">Locations</div></a> */}
                    <a href="C:/home">Change Profile Photo</a>
                  </b>
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p className="float-right">
                  <strong>Name</strong>
                </p>
              </Col>
              <Col md={10}>
                <Form>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Control type="text" placeholder="type your name" />
                    <Form.Text className="text-muted">
                      Help people discover your account by using the name you're
                      known by: either your full name, nickname, or business
                      name.
                      <br />
                      <br />
                      You can only change your name twice within 14 days.
                    </Form.Text>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p className="float-right">
                  <strong>Name</strong>
                </p>
              </Col>
              <Col md={10}>
                <Form>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Control
                      type="text"
                      placeholder="type your UserName account"
                    />
                    <Form.Text className="text-muted">
                      In most cases, you'll be able to change your username back
                      to alifaholshop3066 for another 14 days.
                      <a href="https://help.instagram.com/876876079327341">
                        Learn More
                      </a>
                    </Form.Text>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p className="float-right">
                  <strong>Website</strong>
                </p>
              </Col>
              <Col md={10}>
                <Form.Control type="text" placeholder="Website" />
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p className="float-right">
                  <strong>Bio</strong>
                </p>
              </Col>
              <Col md={10}>
                <Form.Control as="textarea" />
                <Form.Text className="text-muted">
                  <br />
                  <strong>Personal Information</strong>
                  <br />
                  Provide your personal information, even if the account is used
                  for a business, a pet or something else. This won't be a part
                  of your public profile.
                </Form.Text>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p className="float-right">
                  <strong>Email</strong>
                </p>
              </Col>
              <Col md={10}>
                <Form.Control type="text" placeholder="Email" />
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p className="float-right">
                  <strong>Phone Number</strong>
                </p>
              </Col>
              <Col md={10}>
                <Form.Control type="text" placeholder="Phone Number" />
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p className="float-right">
                  <strong>Gender</strong>
                </p>
              </Col>
              <Col md={10}>
                <Form.Control type="text" placeholder="Gender" />
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p className="float-right mb-0 float-bottom">
                  <strong>Similar Account</strong>
                </p>
                <p className="float-right mt-0 float-top">
                  <strong>Suggestions</strong>
                </p>
              </Col>
              <Col md={10}>
                <Form.Check
                  type="checkbox"
                  className="my-1 mr-sm-2"
                  id="customControlInline"
                  label="include your account when recommending similar accounts people might want to follow. "
                />
                <a href="https://help.instagram.com/530450580417848">
                  <b>[?]</b>
                </a>
              </Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={3}>
                <Button type="submit">Submit</Button>
              </Col>
              <Col md={7}>
                <a href="https://help.instagram.com/530450580417848">
                  Temporarily disable my account
                </a>
              </Col>
            </Row>
          </Container>
        }
      />
    );
  }
}
