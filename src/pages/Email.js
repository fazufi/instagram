import React, { Component } from 'react'
import Template from "../components/Template";

export default class Email extends Component {
  render() {
    return (
      <Template {...this.props}><h2>Email</h2></Template>
      )
  }
}