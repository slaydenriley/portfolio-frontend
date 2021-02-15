import React from 'react'
import {connect} from 'react-redux'
import signupUser from '../../actions/signupUser'
import SignupForm from '../../components/Signup'
import {Redirect} from 'react-router-dom'

class SignupContainer extends React.Component {

  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = {user: this.state}
    this.props.signupUser(formData)
  }

  handleSignup = () => {
    if (this.props.logged_in === false) {
      return(
        <div onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <SignupForm />
        </div>)
    } else {
      return <Redirect to="/" />
    }
  }

  render() {
    return (
      <div>
        {this.handleSignup()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    logged_in: state.account.logged_in
  }
}

export default connect(mapStateToProps, {signupUser})(SignupContainer)
