import React from 'react'
import {connect} from 'react-redux'
import fetchPosts from '../../actions/fetchPosts'
import fetchTags from '../../actions/fetchTags'
import ProjectList from '../../components/projects/ProjectList'
import { BlockReserveLoading } from 'react-loadingg'

class ProjectsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTags()
    this.props.fetchPosts()
  }

  handleLoading = () => {
    if (this.props.posts.requesting || this.props.tags.requesting) {
      return <BlockReserveLoading />;

    } else {
      return(
        <div className="posts">
          <ProjectList posts={this.props.posts.posts.filter(project => project.category === "project")} tags={this.props.tags.tags}/>
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
const mapStateToProps = state => {
  return {
    posts: state.posts,
    tags: state.tags
  }
}

export default connect(mapStateToProps, {fetchPosts, fetchTags})(ProjectsContainer)
