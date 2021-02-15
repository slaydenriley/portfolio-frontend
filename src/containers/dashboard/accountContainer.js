import React from 'react'
import {connect} from 'react-redux'
import Account from '../../components/Account'
import { BlockReserveLoading } from 'react-loadingg';
import updateAccount from '../../actions/updateAccount'
import deleteUser from '../../actions/deleteUser'
import logoutUser from '../../actions/logoutUser'

class AccountContainer extends React.Component {
  state = {
    id: this.props.account.user.id,
    name: this.props.account.user.name,
    email: this.props.account.user.email,
    password: '',
    password_confirmation: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = {user: this.state}
    this.props.updateAccount(formData)
  }

  handleDelete = (event) => {
    event.preventDefault()
    let id = {user: {id: event.target.value}}
    if (window.confirm("Are you sure you want to delete your account? This will also delete your comments.")) {
      this.props.deleteUser(id)
    }
    this.props.logoutUser()
    this.props.history.push(`/`)
  }

  handleLoading = () => {
    if (this.props.account.requesting) {
      return <BlockReserveLoading />;
    }
    else {
      return (
        <div onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <Account account={this.state} delete={this.handleDelete}/>
        </div>
      )
    }
  }

  render() {
    return (
      <>{this.handleLoading()}</>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    account: state.account
  }
}


export default connect(mapStatetoProps, {updateAccount, deleteUser, logoutUser})(AccountContainer)
