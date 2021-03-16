import React, { Component } from "react";
import TemplateExplore from "../components/TemplateExplore";

import { Button, Container, Row, Table, Modal, Form } from "react-bootstrap";

import axios from "axios";

// const API_URL = process.env.REACT_APP_API_URL
const API_URL = "http://localhost:3003";

class Messages extends Component {
  state = {
    comments: [],
    show: false,
    index: null,
  };

  Toggle = (p) => {
    this.setState({ show: p, index: null });
  };

  componentDidMount() {
    axios.get(API_URL + "/comments").then((res) => {
      this.setState({ comments: res.data });
    });
  }

  axios = () => {
    axios.get(API_URL + "/comments").then((res) => {
      this.setState({ comments: res.data });
    });
  };

  Pop = (e, id) => {
    e.preventDefault();
    const data = {
      name: e.target.Nama.value,
      email: e.target.Email.value,
      body: e.target.Comment.value,
    };
    if (this.state.index == null) {
      axios.post(API_URL + "/comments", data).then(this.axios());
    } else {
      axios.put(API_URL + "/comments/" + id, data).then(this.axios());
    }

    this.Toggle();
  };

  Del = (id) => {
    axios.delete(API_URL + "/comments/" + id).then(this.axios());
  };

  Edit = (id) => {
    this.setState({ show: true, index: id });
  };
  render() {
    const { comments, index } = this.state;
    return (
      <TemplateExplore {...this.props}>
        <Button variant="primary" onClick={() => this.Toggle(true)}>
          Add
        </Button>

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
              {comments.map((item, id) => (
                <tbody key={id}>
                  <tr>
                    <td>{id + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.body}</td>
                    <td>
                      <Button onClick={() => this.Del(item.id)}>Delete</Button>
                    </td>
                    <td>
                      <Button onClick={() => this.Edit(id)}>Edit</Button>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Row>
        </Container>
        <Modal show={this.state.show} onHide={() => this.Toggle(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add new comments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.Pop(e, index)}>
              <Form.Control
                defaultValue={index != null ? comments[index].name : ""}
                name="Nama"
                type="text"
                placeholder="Username"
                className="mb-3"
              />
              <Form.Control
                defaultValue={index != null ? comments[index].email : ""}
                name="Email"
                controlId="formBasicEmail"
                type="email"
                placeholder="Enter email"
                className="mb-3"
              />

              <Form.Control
                defaultValue={index != null ? comments[index].body : ""}
                name="Comment"
                controlId="exampleForm.ControlTextarea1"
                as="textarea"
                rows={3}
                placeholder="Comment"
                className="mb-3"
              />

              <Button variant="secondary" onClick={() => this.Toggle(false)}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </TemplateExplore>
    );
  }
}

export default Messages;
