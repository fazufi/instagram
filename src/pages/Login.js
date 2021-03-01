import React, { Component } from 'react'
import Template from "../components/Template";

export default class Login extends Component {
  render() {
    return (
      <Template {...this.props}><h2>Login</h2></Template>
      )
  }
}