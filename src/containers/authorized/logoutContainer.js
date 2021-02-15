import React from 'react'
import {connect} from 'react-redux'
import logout from '../../actions/logoutUser'
import {Redirect} from 'react-router-dom'

class LogoutContainer extends React.Component {

  componentDidMount() {
    this.props.logout();
  }

  render() {
    return(
      <Redirect to="/" />
    )
  }
}

export default connect(null, {logout})(LogoutContainer)
