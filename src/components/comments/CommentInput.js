import React from 'react'
import {NavLink} from 'react-router-dom'

const CommentInput = (props) => {

    return(
      <div className="comment-input">
        <form>
          <h2>Add New Comment</h2>
            <em>Commenting as: <u>{props.name}.</u> Not you? <NavLink to="/logout">Logout</NavLink></em><br/>
            <textarea name="content" placeholder="What do you think?"/><br/>
            <input className="submit" type="submit"/>
          </form>
      </div>
    )
}

export default CommentInput;
