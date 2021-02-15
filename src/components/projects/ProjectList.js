import React from 'react'
import { Link } from 'react-router-dom';
import ProjectFilter from '../../components/projects/ProjectFilter'

class ProjectList extends React.Component {

  state = {
    posts: this.props.posts,
    tags: this.props.tags
  }

  handleClick = (event) => {
    if (event.target.value === "all") {
      this.setState({
        posts: this.props.posts.filter(project => project.category === "project")
      })
    }
    else {
      let new_posts = this.props.posts.filter(project =>
            project.tags.find(tag =>
              tag.name.includes(event.target.value)))
      this.setState({
        posts: new_posts
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Projects</h1>
        <em>These are my portfolio projects from my time at Flatiron School.</em>
        <div onClick={this.handleClick}>
          <ProjectFilter tags={this.props.tags}/>
        </div>

        <hr className="line"/>
        <div>
          {this.state.posts.map(post =>
            <div key={post.id} className="post-list">
              <Link to={`/projects/${post.id}`}>
                <em>{post.title}</em>
                <hr className="line"/>
                <img src={`${post.image_link}`}/><br/>
              </Link>
            </div>)}
        </div>
      </div>
    );
  }
}

export default ProjectList;
