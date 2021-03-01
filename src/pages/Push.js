import React, { Component } from 'react'
import Template from "../components/Template";

export default class Push extends Component {
  render() {
    return (
      <Template {...this.props}><h2>Push</h2></Template>
      )
  }
}