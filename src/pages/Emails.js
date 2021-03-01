import React, { Component } from 'react'
import Template from "../components/Template";

export default class Emails extends Component {
  render() {
    return (
    <Template {...this.props}><h2>Emails</h2></Template>
    )
  }
}