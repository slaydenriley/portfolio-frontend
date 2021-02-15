import React from 'react'
import {connect} from 'react-redux'
import fetchPosts from '../../actions/fetchPosts'
import fetchTags from '../../actions/fetchTags'
import ProjectList from '../../components/projects/ProjectList'
import { BlockReserveLoading } from 'react-loadingg'
import ProjectFilter from '../../components/projects/ProjectFilter'

class ProjectsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTags()
    this.props.fetchPosts()
  }

  handleLoading = () => {
    if (this.props.requesting || this.props.tags.requesting) {
      return <BlockReserveLoading />;

    } else {
      return(
        <div className="posts">
          <ProjectList posts={this.props.posts.filter(project => project.category === "project")} tags={this.props.tags}/>
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
    posts: state.posts.posts,
    requesting: state.posts.requesting,
    tags: state.tags.tags
  }
}

export default connect(mapStateToProps, {fetchPosts, fetchTags})(ProjectsContainer)
