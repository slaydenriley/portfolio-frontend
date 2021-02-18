import React from 'react'
import CommentInput from '../../components/comments/CommentInput'
import {connect} from 'react-redux'
import addComment from '../../actions/addComment'

class AddCommentContainer extends React.Component {
  state = {
    content: '',
    post_id: this.props.post_id,
    user_id: this.props.user_id
  }

  handleChange = (event) =>  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = this.state
    this.props.addComment(formData)
  };

  render() {
    return(
      <div onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <CommentInput name={this.props.user_name}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user_id: state.account.user.id,
    post_id: state.single_post.post.id,
    user_name: state.account.user.name
  }
}

export default connect(mapStateToProps, {addComment})(AddCommentContainer)
