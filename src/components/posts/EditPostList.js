import {Link} from 'react-router-dom'

const EditPostList = (props) => {
  return(
    <>
    <h1>Post & Project Manager</h1>
    <hr className="line"/>

    <div className="project-edit-list">
      <h1>Projects</h1>
      {props.posts.posts.filter(post => post.category === "project").map(post =>
        <div key={post.id} className="edit-post-list">
          <h2><em>{post.title}</em></h2>

          <Link to={`/dashboard/posts/edit/${post.id}`}>
            <button id={post.id} className="submit edit-post-button">
              Edit Post
            </button>
          </Link>

          <button id={post.id} className="delete-post-button" onClick={props.delete}>Delete Post</button>
          <em><u>Published on:</u> {post.created_at}</em>
          <hr className="line"/>
        </div>)}
    </div>

    <br/>

    <div className="post-edit-list">
      <h1>Posts</h1>
      {props.posts.posts.filter(post => post.category === "post").map(post =>
        <div key={post.id} className="edit-post-list">
          <h2><em>{post.title}</em></h2>

          <Link to={`/dashboard/posts/edit/${post.id}`}>
            <button id={post.id} className="submit edit-post-button">
              Edit Post
            </button>
          </Link>

          <button id={post.id} className="delete-post-button" onClick={props.delete}>Delete Post</button>
          <em><u>Published on:</u> {post.created_at}</em>
          <hr className="line"/>
        </div>)}
      </div>
    </>
  )
}

export default EditPostList
