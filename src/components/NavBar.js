import { NavLink } from 'react-router-dom';
import {Navbar} from 'react-bootstrap'

const NavBar = props => {

  const logged_in = props.logged_in;
  const admin = props.admin

  const navtype = () => {
    if (logged_in === true) {
      if (admin === true) {
        return (
          <div>
            <Navbar className="container-fluid fixed-top">
              <Navbar.Brand className="font-weight-bold text-muted">
                Riley Slayden
                </Navbar.Brand>
                <NavLink exact={true} to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/posts">Blog</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <div className="ml-auto">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <NavLink to="/logout">Logout</NavLink>
                </div>
            </Navbar>
          </div>
        )
      }
      else {
        return (
          <div>
            <Navbar className="container-fluid fixed-top">
              <Navbar.Brand className="font-weight-bold text-muted">
                Riley Slayden
                </Navbar.Brand>
                <NavLink exact={true} to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/posts">Blog</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <div className="ml-auto">
                  <NavLink to="/account/edit">My Profile</NavLink>
                  <NavLink to="/logout">Logout</NavLink>
                </div>
            </Navbar>
          </div>
        )
      }
    }
    else {
      return (
        <div>
          <Navbar className="fixed-top">
            <Navbar.Brand className="font-weight-bold text-muted">
              Riley Slayden
            </Navbar.Brand>
            <NavLink exact={true} to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/posts">Blog</NavLink>
            <NavLink to="/resume">Resume</NavLink>
              <div className="ml-auto">
                <NavLink to="/signup">Create Account</NavLink>
                <NavLink to="/login">Login</NavLink>
              </div>
          </Navbar>
        </div>
      )
    }
  }

  return (
    <div>
      {navtype()}
    </div>

  );
};



export default NavBar;

//<NavLink to="/account">Account</NavLink>
