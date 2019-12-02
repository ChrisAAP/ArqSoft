import React, { Component } from 'react';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.onChangeUserID = this.onChangeUserID.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userID: '',
            password: '',
        }
    }

    onChangeUserID(e) {
        this.setState({
            userID: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`UserID: ${this.state.userID}`);
        console.log(`Password: ${this.state.password}`);
        
        this.setState({
            userID: '',
            password: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Log In</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.userID}
                                onChange={this.onChangeUserID}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}