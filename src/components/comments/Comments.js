import DeleteComment from '../../components/comments/DeleteComment'

const Comments = (props) => {

    return (
      <div className="comments">
        <h1>Comments</h1>
        {props.comments.map(comment =>
          <div key={comment.id} className="comment-list">

            <h3><em>{comment.user.name}</em></h3>
            <em>...on {comment.created_at}</em>
            <p>{comment.content}</p>

            <DeleteComment delete={props.delete} comment={comment} user_id={props.user_id} post_id={comment.post_id}/>
            <hr className="line"/>
          </div>)}
      </div>
    );
}

export default Comments
