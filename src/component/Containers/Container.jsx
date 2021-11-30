import React, { Component } from 'react'
import SignUp from '../Registration/SignUp'

export default class Container extends Component {
    render() {
        return (
            <div className="row d-flex justify-content-center">
                <div className="col-12 p-2 col-md-6 col-lg-4">
                    <SignUp/>
                </div>
            </div>
        )
    }
}
