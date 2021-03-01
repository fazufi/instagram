import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Nav } from "react-bootstrap";

export default class SideMenu extends Component {
  render() {
    const pathname = this.props.location.pathname;
    return (
      <Nav defaultActiveKey="/home" className="flex-column">
        <Link
          to="/accounts/edit"
          className={`nav-link ${
            pathname === "/accounts/edit" ? "active" : ""
          }`}
        >
          Edit Profile
        </Link>
        <Link
          to="/accounts/password/change"
          className={
            "nav-link " +
            (pathname === "/accounts/password/change" ? "active" : "")
          }
        >
          Change Password
        </Link>
        <Link to="/accounts/manage_access" className={
            "nav-link " +
            (pathname === "/accounts/manage_access" ? "active" : "")
          } >
          Apss and Websites
        </Link>
        <Link to="/emails/settings" className={
            "nav-link " +
            (pathname === "/emails/settings" ? "active" : "")
          }>
          Email and SMS
        </Link>
        <Link to="/push/web/settings" className={
            "nav-link " +
            (pathname === "/push/web/settings" ? "active" : "")
          }>
          Push Notifications
        </Link>
        <Link to="/accounts/contact_history" className={
            "nav-link " +
            (pathname === "/accounts/contact_history" ? "active" : "")
          }>
          Manage Contacts
        </Link>
        <Link to="/accounts/privacy_and_security" className={
            "nav-link " +
            (pathname === "/accounts/privacy_and_security" ? "active" : "")
          }>
          Privacy and Scurity
        </Link>
        <Link to="/session/login_activity" className={
            "nav-link " +
            (pathname === "/session/login_activity" ? "active" : "")
          }>
          Login Activity
        </Link>
        <Link to="/emails/emails_sent" className={
            "nav-link " +
            (pathname === "/emails/emails_sent" ? "active" : "")
          }>
          Emails from Instagram
        </Link>
      </Nav>
    );
  }
}
