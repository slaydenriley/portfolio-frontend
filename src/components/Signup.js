const Signup = () => {
  return(
    <form className="signup-form">
      <h1>Create an Account</h1>
      <input type="text" name="name" placeholder="Your Name" required/><br/>
      <input type="text" name="email" placeholder="Email" required/><br/>
      <input type="password" name="password" placeholder="Password" required/><br/>
      <input type="password" name="password_confirmation" placeholder="Confirm Password" required/><br/>
      <input type="submit" className="submit"/>

    </form>
  )
}

export default Signup
