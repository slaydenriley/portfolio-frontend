import React from 'react'
import {connect} from 'react-redux'
import fetchSinglePost from '../../actions/fetchSinglePost'
import ShowProject from '../../components/projects/ShowProject'
import CommentsContainer from '../../containers/comments/commentsContainer'
import { BlockReserveLoading } from 'react-loadingg';

class SingleProjectContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchSinglePost(id)
  }

  handleLoading = () => {
    if (this.props.post.requesting) {
      return <BlockReserveLoading />;

    } else {
      return(
        <>
        <ShowProject post={this.props.post.post} />
        <CommentsContainer comments={this.props.post.post.comments} />
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
    post: state.single_post,
    requesting: state.requesting
  }
}

export default connect(mapStateToProps, {fetchSinglePost})(SingleProjectContainer)

//        <Route path="/posts/:id" render={() => <ShowPost posts={this.props.posts}/>}/>
// <PostComments comments={this.props.post.post_comments} />
