import React, { Component } from "react";
import Template from "../components/Template";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import dbEdit from   "./dbEdit.json";

export default class Change extends Component {
  state = {
    Password: JSON.parse(localStorage.getItem("Password")) || "fazufi",
    ProfileSaved: JSON.parse(localStorage.getItem("ProfileSaved")) || dbEdit
    
  }
  componentDidUpdate() {
    localStorage.setItem("Password", JSON.stringify(this.state.Password)) 
    console.log("update", this.state.Password); 

  }
 
  onSave = (e) => {
    e.preventDefault()
    if (e.target.newPassword.value === e.target.confirmNewPassword.value) {
      this.setState({ Password: e.target.newPassword.value })
    } else {
      alert("incorrect password")
    }
  }
  
  
  
 
  render() {
    const {ProfileSaved} = this.state
    return (
      <Template {...this.props}>
        <Form onSubmit={this.onSave}>
          <Row>
            <Col md="3" mt="20px" text-align="right">
              <Image
                src="https://instagram.fada2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fada2-1.fna.fbcdn.net&_nc_ohc=SkQvnEdYBN8AX-tYmCd&oh=c42861bdaa4bb6a18094f8bf99bb7f78&oe=6057FD8F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                alt="pp akun"
                width="40"
                height="40"
              />
            </Col>
            <Col md="9">
              <p mt="20" mb="0" fontSize="16">
                {ProfileSaved.UserName}
                
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="3" mt="20px" text-align="right">
              Old Password
            </Col>
            <Col md="9">
              <Form.Control type="password" defaultValue={this.state.Password}  readOnly/>
            </Col>
          </Row>
          <Row>
            <Col md="3" mt="20px" text-align="right">
              New Password
            </Col>
            <Col md="9">
              <Form.Control name="newPassword" type="password" />
            </Col>
          </Row>
          <Row>
            <Col md="3" mt="20px" text-align="right">
              Confirm New Password
            </Col>
            <Col md="9">
              <Form.Control name="confirmNewPassword" type="password" />
            </Col>
          </Row>
          <Row>
            <Col md={3}></Col>
            <Col md={9}>
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
          <Row>
            <Col md={3}></Col>
            <Col md={9}>
              <a href="https://www.instagram.com/accounts/password/reset/">
                Forgot Password
              </a>
            </Col>
          </Row>
        </Form>
      </Template>
    );
  }
}
