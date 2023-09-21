import React, { Component } from 'react';
import axios from 'axios';
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [],id: '',reload: false};
        this.onChangeID = this.onChangeID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      } 
      List() {
        return this.state.data
      }
      refresh = () => {
        window.location.reload()
      }
      componentDidMount() {
        axios.get(`https://vec.onrender.com/users/`)
          .then(response => {
            this.setState({ data: response.data })
            console.log(this.List())
          })
          .catch((error) => {
            console.log(error);
          })
          
      }
      onChangeID(e) {
        this.setState({
          id: e.target.value
        })
      }
      onSubmit(e) {
        e.preventDefault();
        axios.delete(`https://vec.onrender.com/users/${this.state.id}`)
          .then(() => console.log('deleted')).then(this.refresh());
      }
      
  render() {
    return (
        <div>
        <ul>
          {this.List().map(item => (
            <li key={item._id}><h3>{item.username}</h3><p>ID: {item._id}</p><p>Created At: {item.createdAt}</p></li>
          ))}
        </ul>
        <h3>Delete User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>ID: 
            <input  type="text"
                required
                className="form-control"
                value={this.state.id}
                onChange={this.onChangeID}
                /></label>
          </div>
          <div className="form-group">
            <input type="submit" value="Delete User" className="btn btn-primary" />
          </div>
        </form>
        </div>
      );
  }
}