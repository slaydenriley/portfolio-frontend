import React from 'react';

const Tags = props => {
  return (
    <div>
    <form className="edit-form">
        <input type="text" name="tag" placeholder="Add New Tag"/><br/>
        <input className="submit" type="submit" name="submit" value="Add"/>
    </form><br/>
    </div>
  )
};

export default Tags;
