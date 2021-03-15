import React, { Component } from "react";
import Template from "../components/Template";

import { Tab, Row, Col, Container, Form } from "react-bootstrap";

export default class Privacy extends Component {
  render() {
    return (
      <Template {...this.props}>
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              <Col sm={9} className="side-right">
                <Container>
                  <h2>Account Privacy</h2>
                  <Form.Check type="checkbox" label="Private Account" />
                  <p>
                    When your account is private, only people you approve can
                    see your photos and videos on Instagram. Your existing
                    followers won't be affected.
                  </p>
                  <hr />
                  <h2>Activity Status</h2>
                  <Form.Check
                    type="checkbox"
                    label="Show Activity Status
                    "
                  />
                  <p>
                    Allow accounts you follow and anyone you message to see when
                    you were last active on Instagram apps. When this is turned
                    off, you won't be able to see the activity status of other
                    accounts.
                  </p>
                  <hr />
                  <h2>Story Sharing</h2>
                  <Form.Check type="checkbox" label="Allow Sharing" />
                  <p>Let people share your story as messages</p>
                  <hr />
                  <h2>Comments</h2>
                  <p>Edit Comment Settings</p>
                  <hr />
                  <h2>Photos of You</h2>
                  <Form.Group>
                    <Form.Check
                      type="radio"
                      label="Add Automatically"
                      name="formHorizontalRadios"
                    />
                    <Form.Check
                      type="radio"
                      label="Add Manually"
                      name="formHorizontalRadios"
                    />
                  </Form.Group>
                  <p>
                    Choose how you want photos of you added to your profile.
                    Learn more about Photos of You.
                  </p>
                  <hr />
                  <h2>Account Data</h2>
                  <p>View Account Data</p>
                  <hr />
                  <h2>Edit Two-Factor</h2>
                  <p>Authentication Setting</p>
                  <hr />
                  <h2>Data Download</h2>
                  <p>Request Download</p>
                  <hr />
                  <h2>Privacy and Security Help</h2>
                  <p>Support</p>
                </Container>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </Template>
    );
  }
}
