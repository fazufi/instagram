import React, { Component } from 'react';
import { Button, Container, Row, Table, Modal, Form, FormControl } from "react-bootstrap";
import MainTemplate from '../MainTemplate';
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
class Message extends Component {
  state = {
    comments: [],
    show: false,
    showAlert: false,
    indexAlert: null
  }
  handleOpen = () => {
    this.setState({ show: true })
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  crudCreate = (e) => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      body: e.target.comments.value,
      postId: 1
    };
    axios.post(API_URL + `/comments`, data)
      .then(axios.get(API_URL + "/comments")
        .then(res => {
          const comments = res.data;
          this.setState({ comments });
        }))
  }
  crudDelete = (id) => {
    axios.delete(API_URL + "/comments/" + id)
      .then(axios.get(API_URL + "/comments")
        .then(res => {
          const comments = res.data;
          this.setState({ comments });
        }))
    this.setState({ showAlert: false })
  }
  crudUpdate = () => {
    axios.put(API_URL + "/comments/", { "silit": "silit" })
      .then(axios.get(API_URL + "/comments")
        .then(res => {
          const comments = res.data;
          this.setState({ comments });
        }))
    this.setState({ showAlert: false })
  }
  componentDidMount() {
    axios.get(API_URL + "/comments")
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      })
  }
  alertHandleOpen = (item) => {
    this.setState({ showAlert: true })
    this.setState({ indexAlert: item })
  }
  alertHandleClose = () => {
    this.setState({ showAlert: false })
  }
  render() {
    console.log("message");
    return (
      <MainTemplate>
        <Container className="template">
          <br />
          <Row>
            <Dialog show={this.state.show} handleOpen={this.handleOpen} handleClose={this.handleClose} crudCreate={this.crudCreate} />
            <Button onClick={this.handleOpen} className="ml-3" variant="secondary">Add</Button>
          </Row>
          <br />
          <Row className="body">
            <Table striped bordered hover>
              <Alert comments={this.state.comments} index={this.state.indexAlert} show={this.state.showAlert} crudDelete={this.crudDelete} crudUpdate={this.crudUpdate} handleOpen={this.alertHandleOpen} handleClose={this.alertHandleClose} />
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Comments</th>
                </tr>
              </thead>
              {
                this.state.comments.map((item, i) =>
                  <tbody key={item.id}>
                    <tr onClick={e => this.alertHandleOpen(item.id)}>
                      <td>{i + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.body}</td>
                    </tr>
                  </tbody>
                )}
            </Table>
          </Row>
        </Container>
      </MainTemplate>
    )
  }
}

class Dialog extends Component {
  render() {
    console.log("dialog");
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        backdrop="static"
      >
        <Form onSubmit={e => this.props.crudCreate(e)}>
          <Modal.Header closeButton>
            <Modal.Title>Add</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>Name</Form.Label>
            <FormControl name="name" />
            <Form.Label>Email</Form.Label>
            <FormControl type="email" name="email" />
            <Form.Label>Comments</Form.Label>
            <FormControl name="comments" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Discard
          </Button>
            <Button type="submit" onClick={this.props.handleClose} variant="primary">Add</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    )
  }
}

class Alert extends Component {
  state = {
    update: this.props.comments[this.props.index - 1]
  }
  render() {
    console.log("alert");
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        backdrop="static"
      >
        {typeof (this.props.index) === "number" &&
          <Form onSubmit={e => this.props.crudUpdate()}>
            <Modal.Header closeButton>
              <Modal.Title>Updating and Deleting Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Label>Id</Form.Label>
              <FormControl defaultValue={this.props.comments[this.props.index - 1] !== "undefined" && this.props.comments[this.props.index - 1].id} disabled />
              <Form.Label>Name</Form.Label>
              <FormControl defaultValue={this.props.comments[this.props.index - 1] !== "undefined" && this.props.comments[this.props.index - 1].name} name="name" />
              <Form.Label>Email</Form.Label>
              <FormControl defaultValue={this.props.comments[this.props.index - 1] !== "undefined" && this.props.comments[this.props.index - 1].email} type="email" name="email" />
              <Form.Label>Comments</Form.Label>
              <FormControl defaultValue={this.props.comments[this.props.index - 1] !== "undefined" && this.props.comments[this.props.index - 1].body} name="comments" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Update
          </Button>
              <Button onClick={e => this.props.crudDelete(this.props.index)} variant="secondary">Delete</Button>
            </Modal.Footer>
          </Form>
        }
      </Modal>
    )
  }
}

export default Message
