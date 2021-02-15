import React from 'react'
import {connect} from 'react-redux'
import fetchSinglePost from '../../actions/fetchSinglePost'
import ShowPost from '../../components/posts/ShowPost'
import { BlockReserveLoading } from 'react-loadingg';
import CommentsContainer from '../../containers/comments/commentsContainer'
import AddCommentContainer from '../../containers/comments/addCommentContainer'

class SinglePostContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchSinglePost(id)
  }

  handleLoading = () => {
    if (this.props.post.requesting) {
      return <BlockReserveLoading />;
    }
    else {
      return (
        <>
          <ShowPost post={this.props.post.post} />
          <CommentsContainer comments={this.props.post.post.comments} />
        </>
      )
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
    post: state.single_post,
    requesting: state.requesting
  }
}

export default connect(mapStateToProps, {fetchSinglePost})(SinglePostContainer)

//        <Route path="/posts/:id" render={() => <ShowPost posts={this.props.posts}/>}/>
// <PostComments comments={this.props.post.post_comments} />
