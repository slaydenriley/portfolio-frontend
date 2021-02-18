const ManageUsers = (props) => {

  return (
    <div className="all-users posts">
    {props.users.map(user =>
      <div key={user.id} className="user-list">
          <h2>{user.name}</h2>
          {user.email}<br/>
          <form>
          <u>Account type:</u><br/>
             <select className="user-select" defaultValue={user.admin} id={user.id} name="admin" required>
              <option value="true">Admin</option>
              <option value="false">User</option>
            </select><br/>
            <input onClick={props.submit} type="submit" value="Update" className="submit edit-post-button"/>
            <button onClick={props.delete} value={user.id} className="delete">Delete Account</button>
          </form>
          <hr className="line"/>
      </div>)}
    </div>

  )
}

export default ManageUsers
