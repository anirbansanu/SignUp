import React from 'react';

import { useParams } from "react-router-dom";
import {
    Outlet,
    Link
  } from "react-router-dom";

const posts = [
    {
        id: 1,
        title: 'New Post From Ani'
    },
    {
        id: 2,
        title: 'New Post From Sahil'
    },
    {
        id: 3,
        title: 'New Post From Srinath'
    }
]

export function PostList() {
    // let params = useParams();
    return (
        <div>
            <h4>Posts Under Admin List</h4>
            {
                posts.map((item, i)=>(
                    <><Link to={`/admin/posts/${item.id}`}>{item.title}</Link><br/></>
            ))}
            <Outlet />
        </div>
    )
}


export function UserPosts(){
    let params = useParams();
    return (
        <div>
            <strong>Request For Post No. : {params.id}</strong>
        </div>
    )
}

// export default class UserPosts extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             id: 0
//         }
//         this.test = this.test.bind(this);
//     }
//     test(){
//         console.log(ids());
//     }
//     render() {
//         this.test();
//         return (
//             <div>
//                 <h4>Posts Under Admin List</h4>
//                 <h5>Post Id : </h5>
//             </div>
//         )
//     }
// }
