import React from 'react'
import {connect} from 'react-redux'
import Comment from '../../components/comments/Comments'
import deleteComment from '../../actions/deleteComment'

class DeleteCommentContainer extends React.Component {

  handleDelete = (event) => {
    event.preventDefault()

    if (window.confirm("Are you sure you want to delete this comment?")) {
      let id = event.target.id
      let post_id = event.target.value
      let formData = {
        comment: {
          id: id,
          post_id: this.props.post_id
        }
      }
      this.props.deleteComment(formData)
    }
  }

  render() {
    return (
      <div>
        <Comment delete={this.handleDelete} comments={this.props.comments} user_id={this.props.user_id}/>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    user_id: state.account.user.id,
    post_id: state.single_post.post.id
  }
}

export default connect(mapStateToProps, {deleteComment})(DeleteCommentContainer)
