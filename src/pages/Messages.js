import React, { Component } from "react";
import TemplateExplore from "../components/TemplateExplore";

import {
  Button,
  Container,
  Row,
  Table,
  Modal,
  Form,
  FormControl,
} from "react-bootstrap";

import axios from "axios";

// const API_URL = process.env.REACT_APP_API_URL
const API_URL = "http://localhost:3003";

class Messages extends Component {
  state = {
    comments: [],
    show: false,
  };

  Show = () => {
    this.setState({ show: true });
  };

  Hide = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    axios.get(API_URL + "/comments").then((res) => {
      this.setState({ comments: res.data });
    });
  }
  Add = (e) => {
    e.preventDefault();
    console.log("target", e.target.Nama.value);
    const data = {
      name: e.target.Nama.value,
      email: e.target.Email.value,
      body: e.target.Comment.value,
    };
    axios.post(API_URL + "/comments", data).then(
      axios.get(API_URL + "/comments").then((res) => {
        this.setState({ comments: res.data });
      })
    );
    this.Hide();
  };

  // Del = () => {
  //   axios
  //   .delete(API_URL + "/comments")
  //   .then((res) => {
  //     this.setState({
  //       comments: res.data,
  //     });
  //   });
  // };

  render() {
    return (
      <TemplateExplore {...this.props}>
        <Pop
          show={this.state.show}
          Add={this.Add}
          Show={this.Show}
          Hide={this.Hide}
        />
        <Container className="template">
          <Row className="body">
            <Table striped bordered hover responsive="sm" variant="dark">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Comments</th>
                </tr>
              </thead>
              {this.state.comments.map((item, i) => (
                <tbody key={item.id}>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.body}</td>
                    <td><Button onClick={this.Del}>Delete</Button></td>
                  </tr>
                  
                </tbody>
              ))}
            </Table>
          </Row>
        </Container>
      </TemplateExplore>
    );
  }
}

export default Messages;

class Pop extends Component {
  render() {
    console.log("satu", this.props);
    return (
      <>
        <Button variant="primary" onClick={this.props.Show}>
          Add
        </Button>

        <Modal show={this.props.show} onHide={this.props.Hide}>
          <Modal.Header closeButton>
            <Modal.Title>Add new comments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.Add}>
              <Form.Control
                name="Nama"
                type="text"
                placeholder="Username"
                className="mb-3"
              />
              <Form.Control
                name="Email"
                controlId="formBasicEmail"
                type="email"
                placeholder="Enter email"
                className="mb-3"
              />

              <Form.Control
                name="Comment"
                controlId="exampleForm.ControlTextarea1"
                as="textarea"
                rows={3}
                placeholder="Comment"
                className="mb-3"
              />
              
              <Button variant="secondary" onClick={this.props.Hide}>
                Close
              </Button> 
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
