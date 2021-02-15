import { Link } from 'react-router-dom';

const PostList = (props) => {
    return (
      <div className="posts">
        <h1>Blog Posts</h1>
        <em>These are my technical blog posts</em>
        <hr className="line"/>
        <div className="all-posts">
        {props.posts.map(post =>
          <div key={post.id} className="post-list">
            <Link key={post.id} to={`/posts/${post.id}`}>
              <em>{post.title}</em><br/>
              <hr className="line"/>
              <img src={`${post.image_link}`}/><br/>
              <p><em>Posted on: {post.created_at}</em></p>
            </Link>
          </div>)}
        </div>
      </div>
    );
}

export default PostList;
