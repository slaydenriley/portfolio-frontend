import React from 'react'
import {connect} from 'react-redux'
import logout from '../../actions/logoutUser'
import {Redirect} from 'react-router-dom'
import { BlockReserveLoading } from 'react-loadingg';

class LogoutContainer extends React.Component {

  componentDidMount() {
    this.props.logout();
  }

  handleLoading = () => {
    if (this.props.logged_in) {
      return <BlockReserveLoading />;
    }
    else {
      this.props.history.push('/')
    }
  }

  render() {
    return(
      <>
        {this.handleLoading()}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    logged_in: state.account.logged_in
  }
}

export default connect(mapStateToProps, {logout})(LogoutContainer)
