const NewPost = (props) => {

  return (
    <div>
    <h1>Create New Post</h1>
    <div>
        <div>
          <form>
            <input type="text" name="title" placeholder="Post Title" required/><br/>
            <input type="text" name="image_link" placeholder="Featured Image Link" required/><br/>
            <select name="category" required>
              <option value="post">Post</option>
              <option value="project">Project</option>
            </select><br/>
            <input className="submit" type="submit" value="Publish"/>
          </form>
        </div><br/>

        <div className="post-filters">
            {props.tags.map(tag =>
                <label className="tag-submit checkboxes">
                  <input className="checkbox" type="checkbox" name="tags" value={tag.id}/><br/>
                  {tag.name.toUpperCase()}
                </label>
            )}<br/><br/>
        </div>
      </div>
    </div>
  )
}

export default NewPost;
