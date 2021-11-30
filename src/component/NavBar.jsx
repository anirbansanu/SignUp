import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <h1>Routing App</h1>
                <nav
                    style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                    }}
                >
                    <Link to="/home">Home</Link><br/>
                    <Link to="/products">Products</Link><br/>
                    <Link to="/posts">Posts</Link><br/>
                    <Link to="/admin">Admin</Link><br/>
                </nav>
            </div>
        )
    }
}
