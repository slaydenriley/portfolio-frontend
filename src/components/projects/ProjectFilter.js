const ProjectFilter = (props) => {
  return(
    <div className="filter-buttons">
    <h2>Filter by technology...</h2>
      <button value="all" className="submit">All</button>
      {props.tags.map(tag =>
        <button
          key={tag.id}
          value={tag.name}
          className="submit">{tag.name[0].toUpperCase() + tag.name.substring(1)}
        </button>)}
    </div>
  )
}

export default ProjectFilter
