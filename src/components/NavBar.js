import { NavLink, Link } from 'react-router-dom';
import {Navbar} from 'react-bootstrap'

const NavBar = props => {

  const logged_in = props.logged_in;
  const admin = props.admin

  const logged_in_nav = () => {
    return (
      <div>
        <Navbar className="container-fluid fixed-top" expand="md">
        <Navbar.Brand className="font-weight-bold text-muted">
          <Link to="/">Riley Slayden</Link>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <NavLink exact={true} to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/posts">Blog</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <div className="ml-auto">
              <NavLink to="/account/edit">My Profile</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </div>
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }

  const logged_in_admin = () => {
    return (
      <div>
        <Navbar className="container-fluid fixed-top" expand="md">
        <Navbar.Brand className="font-weight-bold text-muted">
          <Link to="/">Riley Slayden</Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <NavLink exact={true} to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/posts">Blog</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <div className="ml-auto">
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </div>
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }

  const not_logged = () => {
    return (
      <div>
        <Navbar className="container-fluid fixed-top" expand="md">
        <Navbar.Brand className="font-weight-bold text-muted">
          <Link to="/">Riley Slayden</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <NavLink exact={true} to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/posts">Blog</NavLink>
          <NavLink to="/resume">Resume</NavLink>
            <div className="ml-auto">
              <NavLink to="/signup">Create Account</NavLink>
              <NavLink to="/login">Login</NavLink>
            </div>
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }

  const navtype = () => {
    if (logged_in === true) {
      if (admin === true) {
        return logged_in_admin()
      }
      else {
        return logged_in_nav()
      }
    }
    else {
      return not_logged()
    }
  }

  return (
    <div>
      {navtype()}
    </div>

  );
};

export default NavBar;
