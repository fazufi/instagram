import axios from "axios";
import React, { Component } from "react";
import { Col } from "react-bootstrap";
import Template from "../components/Template";

const URL = "http://localhost:3004/";
export default class Manage extends Component {
  state = {
    Contact: [],
  };

  componentDidMount() {
    axios
      .get(URL + "contacts")
      .then((res) => {
        console.log("Response: ", res);
        this.setState({ Contact: res.data });
        console.log("state", this.state.Contact.user.contact_history);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // fetch(CRUD + "data")
  //     .then((response) => response.json())
  //     .then((json) => console.log("json", json))};
  render() {
    return (
      <Template {...this.props}>
        <div>
          <h2>Manage Contacts</h2>
          <p>
            The people listed here are contacts you've uploaded to Instagram. To
            remove your synced contacts, tap Delete All. Your contacts will be
            re-uploaded the next time Instagram syncs your contacts unless you
            go to your device settings and turn off access to contacts.
            <br /> <br />
            Only you can see your contacts, but Instagram uses the info you've
            uploaded about your contacts to make friend suggestions for you and
            others and to provide a better experience for everyone.
          </p>
          <br /> <br />
          <Col md={8}>
            <h5>614 Synced Contacts</h5>
          </Col>
          <Col md={4}></Col>
          <hr />
          {this.state.Contact.user?.contact_history.map((item, b) => (
            <div key={b}>
              <strong>
                {item.first_name} {item.last_name}
              </strong>
              <p>{item.raw_value}</p>
            </div>
          ))}
        </div>

       
      </Template>
    );
  }
}
