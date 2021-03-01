import React, { Component } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import Template from "../components/Template";
import dbEdit from   "./dbEdit.json";


export default class Edit extends Component {
  
  state = {
    ProfileSaved: JSON.parse(localStorage.getItem("ProfileSaved")) || dbEdit
  };

  componentDidMount(){
    console.log("didmont");
  }
  componentDidUpdate() {
    localStorage.setItem("ProfileSaved", JSON.stringify(this.state.ProfileSaved))
    console.log("update")
  }
  
  onSave = (e) => {
    e.preventDefault();
    
    const ProfileSaved = 
      { UserName: e.target.Username.value ,
      Name: e.target.Name.value ,
       Bio: e.target.Bio.value ,
       Website: e.target.Website.value ,
       Email: e.target.Email.value ,
       PhoneNumber: e.target.PhoneNumber.value ,
       Gender: e.target.Gender.value} ;
      this.setState({ProfileSaved})
      console.log("onsave")
  }   
  
  render() {
    console.log("render");
    const { ProfileSaved } = this.state;
    return (
      <Template {...this.props}>
        <Form onSubmit={this.onSave}>
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
                <h5>{ProfileSaved.UserName}</h5>
                <p className="mt-0">
                  <b>
                    {/* <a href="/explore/locations/"><div class="_7UhW9  PIoXz       MMzan   _0PwGv         uL8Hv         ">Locations</div></a> */}
                    <a href="">Change Profile Photo</a>
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
                <Form.Group>
                  <Form.Control
                    name="Name"
                    type="text"
                    placeholder="type your name"
                    defaultValue="Alifah"
                  />
                  <Form.Text className="text-muted">
                    Help people discover your account by using the name you're
                    known by: either your full name, nickname, or business name.
                    <br />
                    <br />
                    You can only change your name twice within 14 days.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p className="float-right">
                  <strong>Username</strong>
                </p>
              </Col>
              <Col md={10}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="Username"
                    placeholder="type your UserName account"
                    defaultValue="Alifaholshop3066"
                  />
                  <Form.Text className="text-muted">
                    In most cases, you'll be able to change your username back
                    to alifaholshop3066 for another 14 days.
                    <a href="https://help.instagram.com/876876079327341">
                      Learn More
                    </a>
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p className="float-right">
                  <strong>Website</strong>
                </p>
              </Col>
              <Col md={10}>
                <Form.Control
                  name="Website"
                  type="website"
                  placeholder="Website"
                />
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p className="float-right">
                  <strong>Bio</strong>
                </p>
              </Col>
              <Col md={10}>
                <Form.Control name="Bio" as="textarea" />
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
                <Form.Control name="Email" type="email" placeholder="Email" />
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p className="float-right">
                  <strong>Phone Number</strong>
                </p>
              </Col>
              <Col md={10}>
                <Form.Control
                  name="PhoneNumber"
                  type="number"
                  placeholder="Phone Number"
                />
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <p className="float-right">
                  <strong>Gender</strong>
                </p>
              </Col>
              <Col md={10}>
                <Form.Control name="Gender" type="text" placeholder="Gender" />
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
        </Form>
      </Template>
    );
  }
}
