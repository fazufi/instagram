import React, { Component } from "react";
import Template from "../components/Template";
import { Tabs, Tab } from "react-bootstrap";

export default class Apps extends Component {
  render() {
    return (
      <Template {...this.props}>
        
          <h2>Apps and Websites</h2>
          <Tabs
            defaultActiveKey="aActivektif"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="Active" title="Active">
              <li>
                These are apps and websites you've used Instagram to log into
                and have recently used. They can request info you chose to share
                with them.
              </li>
              <br />
              <li>
                You have not authorized any applications to access your
                Instagram account.
              </li>
            </Tab>
            <Tab eventKey="Expired" title="Expired">
              <li>
                These are apps and websites you've used Instagram to log into
                and may not have used in a while. They may still have access to
                info you previously shared, but their ability to make additional
                requests for private info has expired.
              </li>
              <br />
              <li>
                You have no expired applications that had access to your
                Instagram account.
              </li>
            </Tab>
            <Tab className="tab-app" eventKey="Removed" title="Removed">
              <li>
                These are apps and websites you removed from your account. This
                means they may still have access to info you previously shared,
                but can't make additional requests for private info.
              </li>
              <br />
              <li>
                You have no removed applications that had access to your
                Instagram account.
              </li>
            </Tab>
          </Tabs>
       
      </Template>
    );
  }
}
