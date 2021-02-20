import React, { Component } from "react";
import {Link} from "react-router-dom";

import {
 
  Nav
} from "react-bootstrap";

export default class SideMenu extends Component {
  render() {
    // console.log(this.props);
    const pathname = this.props.location.pathname;
    return (
      <Nav defaultActiveKey="/home" className="flex-column">
        <Link
          to="/accounts/edit"
          className={
            `nav-link ${pathname === "/accounts/edit" ? "active" : ""}`
          }
        >
          Edit Profile
        </Link>
        <Link
          to="/accounts/password/change"
          className={
            "nav-link " + (pathname === "/accounts/password/change" ? "active" : "")
          }
        >
          Change Password
        </Link>
        <Link to="/accounts/manage_access" className="nav-link">
          Apss and Websites
        </Link>
        <Link to="/emails/settings" className="nav-link">
          Email and SMS
        </Link>
        <Link to="/push/web/settings" className="nav-link">
          Push Notifications
        </Link>
        <Link to="/accounts/contact_history" className="nav-link">
          Manage Contacts
        </Link>
        <Link to="/accounts/privacy_and_security" className="nav-link">
          Privacy and Scurity
        </Link>
        <Link to="/session/login_activity" className="nav-link">
          Login Activity
        </Link>
        <Link to="/emails/emails_sent" className="nav-link">
          Emails from Instagram
        </Link>
      </Nav>
    );
  }
}
