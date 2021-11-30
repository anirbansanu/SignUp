import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './component/Registration/SignUp';
import './Main.css';
import Particles from "react-tsparticles";
import ParticleConfig from "./component/Registration/particle"

export default class Main extends Component {
    render() {
        return (
            <>
            <div className="position-absolute">
                <Particles params={ParticleConfig}/>
            </div>
            <div className="container-fluid mt-5">
                 <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-8 col-lg-5 mt-2">
                        <SignUp/>
                    </div>
                </div>
                
            </div>
            </>
        )
    }
}
