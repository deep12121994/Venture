import React, { Component } from "react";
import axios from "axios";

export default class LogIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            loginErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { username, password} = this.state;

        axios
            .post(
                "http://localhost:3001/Login",
                {
                    user:{
                        username: username,
                        password: password
                    }
                },
                {withCredentials: true}
            )
            .then(response =>{
                if(response.data.logged_in) {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(err => {
                console.log("login error", err);
            });
        event.preventDefault();    
    }

    render(){
        return(

           <form className="form-main">
                <h1>Log In</h1>
                <div className="form-ip">
                    <div className="form-group">
                        <label className="form-label">User name</label>
                        <input type="text" className="form-control" placeholder="Enter name" onChange={event=> this.setState({username: event.target.value})} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={event=> this.setState({username: event.target.value})} /> 
                    </div>
                 
                    <button type="submit" className="button" onClick={()=>this.logIn}>Log In</button>
                    <p className="forgot-password text-right">
                        <a href="#something">Forgot password?</a>
                    </p>
                </div>

            </form>
        )
    }
}