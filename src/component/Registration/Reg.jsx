import React, { Component } from 'react';
import isEmail from 'validator/es/lib/isEmail';
import './signup.css';

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            pass: '',
            cnfPass: '',
            userName: '',
            phNum: '',
            invalidMail : false
        }
        
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
        else
            console.log('handleChange else part');
        console.log(event.target.value);
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form autoComplete="off">
                        <div className="tab">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                                <div className="before">
                                    <input type="email" onChange={(ev)=>this.handleChange('email',ev)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} />
                                </div>
                                <div id="emailHelp" className={`form-text ${this.state.invalidMail?'text-danger':''}`}>{!this.state.invalidMail?"We'll never share your email with anyone else.":'Please Enter Valid Mail'}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onChange={(ev)=>this.handleChange('pass',ev)} value={this.state.pass} className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confrimPassword" className="form-label">Confrim Password</label>
                                <input type="password" onChange={(ev)=>this.handleChange('cnfPass',ev)} value={this.state.cnfPass} className="form-control" id="confrimPassword"/>
                                <div id="confrimPassword" className={`form-text text-danger ${this.state.cnfPass===this.state.pass?'d-none':''}`} >Password not matched</div>
                            </div>
                            
                        </div>
                        <div className="tab">
                            <div className="mb-3">
                                <label htmlFor="userName" className="form-label">User Name</label>
                                <input type="text" onChange={(ev)=>this.handleChange('userName',ev)} className="form-control" id="userName" aria-describedby="userName" value={this.state.userName} />
                                <div id="userName" className={`form-text ${this.state.invalidMail?'text-danger':''}`}>{!this.state.invalidMail?"":'Please Enter Valid Mail'}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phNum" className="form-label">Phone </label>
                                <input type="text" onChange={(ev)=>this.handleChange('user',ev)} className="form-control" id="exampleInputEmail1" aria-describedby="phNum" value={this.state.phNum} />
                                <div id="phNum" className={`form-text ${this.state.invalidMail?'text-danger':''}`}>{!this.state.invalidMail?"":'Please Enter Valid Mail'}</div>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}
