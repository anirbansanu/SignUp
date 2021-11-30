import React, { Component } from 'react';
import isEmail from 'validator/es/lib/isEmail';
import './signup.css';
import Typewriter from 'typewriter-effect';

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            height: undefined,
            email: '',
            pass: '',
            cnfPass: '',
            userName: '',
            phNum: '',
            invalidMail : false,
            invalidUserName : false,
            tab: 1
        }
        
    }
    updateHeight=(time,height)=>{
        setInterval(
            ()=>
            {
                this.setState({height:height})
            },time
        )
        console.log('updateWidth');
    }
    nxtTab = (nxttab) => {
        this.setState({tab: nxttab})
    }
    handleChange = (name,event)=> {
        if(name === 'email')
        {
            this.setState({email: event.target.value});
            if(isEmail(event.target.value))
                this.setState({invalidMail: false});
            else
                this.setState({invalidMail: true});
            
        }
        else if(name === 'pass')
            this.setState({pass: event.target.value});
        else if(name === 'cnfPass')
            this.setState({cnfPass : event.target.value});
        else if(name === 'userName')
            this.setState({userName : event.target.value});
        else
            console.log('handleChange else part');
        console.log(event.target.value);
    }
    render() {
        return (
            // <div className='card sign-up-card text-white' style={{height: this.state.height?this.state.height:'102px'}}>
            <div className='card sign-up-card text-white'>
                <div className="card-body">
                    <div class="typewriter text-secondary" style={{minHeight: '90px'}}>
                        <h5 className='pt-3 pb-3'>
                            <Typewriter
                                options={{
                                    strings: ['Welcome to view By Anirban <br/>Fill It & Enjoy'],
                                    autoStart: true,
                                    loop: true,
                                    pauseFor: 13000
                                }}
                            />
                        </h5>
                    </div>
                    <div className={`tab ${this.state.tab===1?"show":'hide'}`}>
                        <div className="mb-4">
                            <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Email </label>
                            <div className="before">
                                <input type="email" onChange={(ev)=>this.handleChange('email',ev)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} />
                            </div>
                            <div id="emailHelp" className={`form-text ${this.state.invalidMail?'text-danger':''}`}>{!this.state.invalidMail?"We'll never share your email with anyone else.":'Please enter valid mail'}</div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onChange={(ev)=>this.handleChange('pass',ev)} value={this.state.pass} className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confrimPassword" className="form-label">Confrim Password</label>
                            <input type="password" onChange={(ev)=>this.handleChange('cnfPass',ev)} value={this.state.cnfPass} className="form-control" id="confrimPassword"/>
                            <div id="confrimPassword" className={`form-text text-danger ${this.state.cnfPass===this.state.pass?'d-none':''}`} >Password not matched</div>
                        </div>
                        <button type="button" onClick={()=>this.nxtTab(2)} className="btn btn-outline-info fw-bold float-end">Continue</button>
                    </div>
                    <div className={`tab ${this.state.tab===2?"show":'hide'}`}>
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label">User Name</label>
                            <input type="text" onChange={(ev)=>this.handleChange('userName',ev)} className="form-control" id="userName" aria-describedby="userName" value={this.state.userName} />
                            <div id="userName" className={`form-text ${this.state.invalidUserName?'text-danger':''}`}>{!this.state.invalidUserName?"Please give a User Name":'User Name already exist'}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phNum" className="form-label">Phone </label>
                            <input type="text" onChange={(ev)=>this.handleChange('user',ev)} className="form-control" id="phNum" aria-describedby="phNum" value={this.state.phNum} />
                            <div id="phNum" className={`form-text ${this.state.invalidMail?'text-danger':''}`}>{!this.state.invalidPhNum?"Please give a Phone Number":'User Name already exist'}</div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="button" onClick={()=>this.nxtTab(1)} className="btn btn-outline-info fw-bold float-start">Previus</button>
                        <button type="button" className="btn btn-outline-info fw-bold float-end">Continue</button>
                    </div>
                </div>                
            </div>
        )
    }
}
