const TagEditor = (props) => {
  return (
    <>
      <div className="tags">
        {props.tags.tags.map(tag =>
          <div key={tag.id} className="edit-post-list">
            <h2><em>{tag.name}</em></h2>
            <button id={tag.id} className="delete-post-button" onClick={props.delete}>Delete Tag</button>
            <hr className="line"/>
          </div>)}
      </div>
    </>
  )
}

export default TagEditor
