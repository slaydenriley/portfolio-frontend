import React from 'react'
import {connect} from 'react-redux'
import fetchPosts from '../../actions/fetchPosts'
import PostList from '../../components/posts/PostList'
import { BlockReserveLoading } from 'react-loadingg';

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  handleLoading = () => {
    if (this.props.posts.requesting) {
      return <BlockReserveLoading />;

    } else {
      return(
        <>
        <PostList posts={this.props.posts.posts.filter(post => post.category === "post")} />
        </>)
    }
  }

  render() {
    return (
      <div>
        {this.handleLoading()}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(PostsContainer)
