// import logo from './logo.svg';
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
} from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <Container fluid position="center">
        <Row className="border">
          <Navbar bg="light" expand="lg" className="ta-1">
            <Navbar.Brand>
              <img
                alt="Instagram"
                class="s4Iyt"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                srcset="/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png 2x"
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
        </Row>
        <Container className="mt-3">
          <Row className="border">
            <Container>
        <Router>
            <Container>
            <Row >
              <Col md={2}>
                <p>
                  <Link to="/accounts/edit">Edit Profile</Link>
                </p>
                <p>
                  <Link to="/accounts/password/change">Change Password</Link>
                </p>
                <p>
                  <Link to="/accounts/manage_access">Apss and Websites</Link>
                </p>
                <p>
                  <Link to="/emails/settings">Email and SMS</Link>
                </p>
                <p>
                  <Link to="/push/web/settings">Push Notifications</Link>
                </p>
                <p>
                  <Link to="/accounts/contact_history">Manage Contacts</Link>
                </p>
                <p>
                  <Link to="/accounts/privacy_and_security">
                    Privacy and Scurity
                  </Link>
                </p>
                <p>
                  <Link to="/session/login_activity">Login Activity</Link>
                </p>
                <p>
                  <Link to="/emails/emails_sent">Emails from Instagram</Link>
                </p>
              </Col>
              <Col md={10} className="border">
                <Switch>
                  <Route path="/accounts/edit" component={Edit} />
                  <Route path="/accounts/password/change" component={Change} />
                  <Route path="/accounts/manage_access" component={Apss} />
                  <Route path="/emails/settings" component={Email} />
                  <Route path="/push/web/settings" component={Push} />
                  <Route path="/accounts/contact_history" component={Manage} />
                  <Route
                    path="/accounts/privacy_and_security"
                    component={Privacy}
                  />
                  <Route path="/session/login_activity" component={Login} />
                  <Route path="/emails/emails_sent" component={Emails} />
                </Switch>
              </Col>
            </Row>
            </Container>
        </Router>
        </Container>
        </Row>
        </Container>
      </Container>
    );
  }
}

class Edit extends Component {
  render() {
    return (
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
                  known by: either your full name, nickname, or business name.
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
                  In most cases, you'll be able to change your username back to
                  alifaholshop3066 for another 14 days.
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
              Provide your personal information, even if the account is used for
              a business, a pet or something else. This won't be a part of your
              public profile.
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
              
            /><a href="https://help.instagram.com/530450580417848"><b>[?]</b></a>
          </Col>
        </Row>
        <Row>
          <Col md={2}>            
          </Col>
          <Col md={3}>
          <Button type="submit">Submit</Button>
          </Col>
          <Col md={7}>
          <a href="https://help.instagram.com/530450580417848">Temporarily disable my account</a>
          </Col>
        </Row>
      </Container>
    );
  }
}

class Change extends Component {
  render() {
    return <h2>Change</h2>;
  }
}

class Apss extends Component {
  render() {
    return <h2>Apss</h2>;
  }
}

class Email extends Component {
  render() {
    return <h2>Email</h2>;
  }
}

class Push extends Component {
  render() {
    return <h2>Push</h2>;
  }
}
class Manage extends Component {
  render() {
    return <h2>Manage</h2>;
  }
}
class Privacy extends Component {
  render() {
    return <h2>Privacy</h2>;
  }
}
class Login extends Component {
  render() {
    return <h2>Login</h2>;
  }
}
class Emails extends Component {
  render() {
    return <h2>Emails</h2>;
  }
}
