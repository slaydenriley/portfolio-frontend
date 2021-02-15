import React from 'react'

const Account = (props) => {

  return (
    <div className="account posts">
      <h1>Manage My Account</h1>
      <hr className="line"/>
        <div>
          <h2>{props.account.name}</h2>
          <a href={"mailto:" + props.account.email}>{props.account.email}</a>
        </div>

        <form className="edit-form">
          <h1>Edit Account</h1>
          <input type="text" name="name" placeholder="Your Name" defaultValue={props.account.name} required/><br/>
          <input type="text" name="email" placeholder="Email" defaultValue={props.account.email} required/><br/>
          <input type="password" name="password" placeholder="Change Password (optional)"/><br/>
          <input type="password" name="password_confirmation" placeholder="Confirm Password"/><br/>
          <input type="submit" className="submit" value="Edit"/><br/><br/>
          <button onClick={props.delete} value={props.account.id} className="delete">Delete Account</button>
        </form>
    </div>

  )
}

export default Account
