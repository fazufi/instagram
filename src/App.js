// import logo from './logo.svg';

import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Form,
  FormControl,
  Container,
  Row,
  Col,
  Tab,
  Sonnet
} from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="1">Edit Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Change Password</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">Apss and Websites</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">Email and SMS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5">Push Notifications</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="6">Manage Contacts</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="7">Privacy and Scurity</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="8">Login Activity</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="9">Emails from Instagram</Nav.Link>
              </Nav.Item>

            </Nav>
          </Col>
          <Col sm={9}>
            
            <Tab.Content>
              <Tab.Pane eventKey="1">siji</Tab.Pane>
              <Tab.Pane eventKey="2">sisji</Tab.Pane>
              <Tab.Pane eventKey="3">sisji</Tab.Pane>
              <Tab.Pane eventKey="4">sisji</Tab.Pane>
              <Tab.Pane eventKey="5">sisji</Tab.Pane>
              <Tab.Pane eventKey="6">sisji</Tab.Pane>
              <Tab.Pane eventKey="7">sisji</Tab.Pane>
              <Tab.Pane eventKey="8">sisji</Tab.Pane>
              <Tab.Pane eventKey="9">sisji</Tab.Pane>

            </Tab.Content>
          
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default App;
