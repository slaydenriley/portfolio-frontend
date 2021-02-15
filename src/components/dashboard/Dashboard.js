import {Link} from "react-router-dom"

const Dashboard = () => {
    return (
      <div className="dashboard">
        <h1>Admin Dashboard</h1>
        <hr className="line"/>
          <div className="dashboard-content">
            <h1><Link className="dashboard-components" to="/dashboard/posts/new">New Post</Link></h1>
            <h1><Link className="dashboard-components" to="/dashboard/posts/edit">Manage Posts & Projects</Link></h1>
            <h1><Link className="dashboard-components" to="/dashboard/account/edit">Edit Account</Link></h1>
            <h1><Link className="dashboard-components" to="/dashboard/users/edit">Manage Users</Link></h1>
            <h1><Link className="dashboard-components" to="/dashboard/tags/edit">Manage Tags</Link></h1>
          </div>
        </div>)
};

export default Dashboard;
