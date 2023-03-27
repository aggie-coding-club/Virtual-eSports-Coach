import React, { Component } from 'react';
import axios from 'axios';


class Register extends Component{
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    
    axios.post(`{window.location.hostname}/users/add`, user)
      .then(res => console.log(res.data));
  

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Users</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username:
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                /> </label>
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default Register;