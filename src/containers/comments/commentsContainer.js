import React from 'react'
import Comments from '../../components/comments/Comments'
import DeleteCommentContainer from './deleteCommentContainer'
import {connect} from 'react-redux'
import deleteComment from '../../actions/deleteComment'
import AddCommentContainer from './addCommentContainer'
import {Link} from 'react-router-dom'

class CommentsContainer extends React.Component {

  handleView = () => {
    if (this.props.logged_in) {
      return(
        <div>
          <DeleteCommentContainer comments={this.props.comments}/>
          <AddCommentContainer />
        </div>
      )
    }
    else
      return(
        <div>
          <Comments comments={this.props.comments} />
          <h3 className="comments">To add a new comment, please <Link to='/login'>login</Link> or <Link to='/signup'>create an account.</Link></h3>
        </div>
      )
    }

  render() {
    return(
      <div>{this.handleView()}</div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    post_id: state.single_post.post.id,
    logged_in: state.account.logged_in,
    admin: state.account.admin

  }
}

export default connect(mapStateToProps, {deleteComment})(CommentsContainer)
