import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  // best way to write generic form change handler:
//   handleLastNameChange = event => {
//   this.setState({
//     [event.target.name]: event.target.value
//   })
// }

  render() {
    return (
      <form>
        <input text="type" name="firstName" value={this.state.firstName} onChange={event => this.handleFirstNameChange(event)}/>
        <input type="text" name="lastName" value={this.state.lastName} onChange={event => this.handleLastNameChange(event)}/>
      </form>
    );
  }
}
