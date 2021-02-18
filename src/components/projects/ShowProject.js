import React from 'react';

const ShowProject = props => {
  return (
    <div className="single-post">
      <div className="center">
        <h1 className="post-title">{props.post.title}</h1>
        <em className="created_at">Published on: {props.post.created_at}</em>
        <hr className="line"/>
        <img alt="Project" src={props.post.image_link}/>
      </div>
      <div className="post-content"dangerouslySetInnerHTML={{ __html: props.post.content}} />
    </div>
  )
};

export default ShowProject;
