const PostEditor = (props) => {

      return (
        <div>
          <h1>Edit {props.post.title}</h1>
            <input type="text" name="title" defaultValue={props.post.title}/><br/>
            <input type="text" name="image_link" defaultValue={props.post.image_link} placeholder="Image Link"/><br/>
            <select defaultValue={props.post.category} name="category" required>
              <option value="post">Post</option>
              <option value="project">Project</option>
            </select><br/>
            <input className="submit" type="submit" value="Updated Post"/><br/><br/>

            <div className="post-filters">
                {props.tags.map(tag =>
                    <label key={tag.id} className="tag-submit checkboxes">
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="tags"
                        value={tag.id}
                        defaultChecked={(props.post.tags.map(t => t.id).includes(tag.id))}
                        /><br/>
                      {tag.name.toUpperCase()}
                    </label>

                )}<br/><br/>
            </div>
        </div>
      )
    }

export default PostEditor
