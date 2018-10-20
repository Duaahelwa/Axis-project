import React, { Component } from "react";
import Sites from "./Sites.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      username: '',
      usernameValid: false,
      password: '',
      passwordValid: false,
      submitDisabled: true
    };
  };
  handleChangeUsername = (e) => {
    let usernameValid = e.target.value.length > 6 ? true : false;
    let submitValid = this.state.passwordValid && usernameValid;
    this.setState({
      username: e.target.value,
      usernameValid: usernameValid,
      submitDisabled: !submitValid
    })
  };
  handleChangePassword = (e) => {
    let passwordValid = e.target.value.length > 6 ? true : false;
    let submitValid = this.state.usernameValid && passwordValid;
    this.setState({
      password: e.target.value,
      passwordValid: passwordValid,
      submitDisabled: !submitValid
    })
  };
 
 handleSubmit = (e) => {
    e.preventDefault();
       fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }))
        .catch(error => console.error('Error:', error));
 }

  render() {
    const { users } = this.state;

    return (
      <div >
        <div className="login-page">
          <div className="login-form">
            <form onSubmit={this.handleSubmit}>

              <div >
                <label>username</label><br/>
                <input type="text" value={this.state.email} onChange={this.handleChangeUsername} />
              </div>

              <div>
               <label>password</label><br/>
                <input type="text" value={this.state.password} onChange={this.handleChangePassword} />
              </div>

              <div className="login-form-submit">
                <input type="submit" value="Login"  disabled={this.state.submitDisabled}/>
              </div>
              <Sites />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;