import React from 'react'
import Login from '../../components/Login'
import {connect} from 'react-redux'
import loginUser from '../../actions/loginUser'
import {Redirect} from 'react-router-dom'

class LoginContainer extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (event) =>  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = {user: this.state}
    this.props.loginUser(formData)
  };

  handleLogin = () => {
    if (this.props.logged_in === false) {
      return(
        <div onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <Login errors={this.props.errors}/>
        </div>)
    } else {
      return <Redirect to="/" />
    }
  }

  render() {
    return (
      <div>
        {this.handleLogin()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    logged_in: state.account.logged_in,
    errors: state.account.errors
  }
}

export default connect(mapStateToProps, {loginUser})(LoginContainer)
