import React from 'react'
import {connect} from 'react-redux'
import fetchPosts from '../../actions/fetchPosts'
import deletePost from '../../actions/deletePost'
import PostEditor from '../../components/posts/PostEditor'
import {Link, Redirect} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { BlockReserveLoading } from 'react-loadingg';
import EditSinglePostContainer from './EditSinglePostContainer'
import EditPostList from '../../components/posts/EditPostList'

class EditPostContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  handleDeleteClick = (event) => {
    let post = {post: {id: event.target.id}}
    if (window.confirm("Are you sure you want to delete this post?")) {
      this.props.deletePost(post)
    }
  }

  handleLoading = () => {
    if (this.props.posts.requesting) {
      return <BlockReserveLoading />
    }
    else {
      return (
        <div className="posts">
          <EditPostList posts={this.props.posts} delete={this.handleDeleteClick}/>

        </div>
      )
    }
  }

  render() {
    return (
      <>
        {this.handleLoading()}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts, deletePost})(EditPostContainer)
