import React, { Component } from 'react';
import {
  Outlet,
  Link
} from "react-router-dom";


export default class DashBoard extends Component {
    render() {
        
        return (
            <div>
                <h4>This is Dashboard</h4>
                <Link to="/admin/users">Users</Link><br/>
                <Link to="/admin/posts">Posts</Link>
                
                <Outlet />
            </div>
        )
    }
}
