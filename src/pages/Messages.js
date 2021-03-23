import React, { Component } from "react";
import TemplateExplore from "../components/TemplateExplore";

import { Button, Container, Row, Table, Modal, Form } from "react-bootstrap";

import axios from "axios";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../components/TopMenu";

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = "http://localhost:3003";

class Messages extends Component {
  state = {
    comments: [],
    show: false,
    index: null,
    id: null,
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
      console.log('refresh', res.data)
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
      axios.post(API_URL + "/comments", data).then(() => this.axios());
    } else {
      console.log("pop-id", id);
      axios.put(API_URL + "/comments/" + id, data).then(() => this.axios());
    }

    this.Toggle(false);
  };

  Del = (id) => {
    axios.delete(API_URL + "/comments/" + id).then(() => this.axios());
  };

  Edit = async (id) => {
    await this.setState({ show: true, index: id });
    this.setState({ id: this.state.comments[this.state.index].id });
    console.log("iki", this.state.id, this.state.index);
  };
  render() {
    const { comments, index } = this.state;
    console.log("render", comments.length);
    return (
      <TemplateExplore {...this.props}>
        <Button variant="primary" onClick={() => this.Toggle(true)}>
          Add
        </Button>

        <Container >
          <Row className="body">
            <Table striped bordered hover responsive="sm"  >
              <thead >
                <tr >
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Comments</th>
                </tr>
              </thead>
              {comments.map((item, id) => (
                <tbody key={id}>
                  <tr>
                    <td className={this.props.mode} >{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.body}</td>
                    <p>
                      <Button onClick={() => this.Del(item.id)}>Delete</Button>

                      <Button onClick={() => this.Edit(id)}>Edit</Button>
                    </p>

                  </tr>
                </tbody>
              ))}
            </Table>
          </Row>
        </Container>
        <Modal
          animation={false}
          show={this.state.show}
          onHide={() => this.Toggle(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add new comments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.Pop(e, this.state.id)}>
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
                id="formBasicEmail"
                type="email"
                placeholder="Enter email"
                className="mb-3"
              />

              <Form.Control
                defaultValue={index != null ? comments[index].body : ""}
                name="Comment"
                id="exampleForm.ControlTextarea1"
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




export default connect(mapStateToProps, mapDispatchToProps)(Messages);