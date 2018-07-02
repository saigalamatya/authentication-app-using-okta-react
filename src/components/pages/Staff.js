import React, { Component } from 'react'

class Staff extends Component {

  state = {
    currentUserName: '',
    currentUserEmail: ''
  }

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    })
  }

  render() {
    console.log(this.state);
    const { currentUserEmail, currentUserName } = this.state;
    return (
      <div>
        <h1>Welcome { currentUserName }</h1>
        <p>You have reached the authorize staff area of the portal.</p>
      </div>
    )
  }
}

export default Staff;