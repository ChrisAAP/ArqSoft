import React, { Component } from 'react';

export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordRepeat = this.onChangePasswordRepeat.bind(this)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
            passwordRepeat: '',
            name: '',
            country: '',
            class: '',
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangePasswordRepeat(e) {
        this.setState({
            passwordRepeat: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeCountry(e) {
        this.setState({
            country: e.target.value
        });
    }

    onChangeClass(e) {
        this.setState({
            class: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`e-mail: ${this.state.email}`);
        console.log(`Password: ${this.state.password}`);
        console.log(`Password 2: ${this.state.passwordRepeat}`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Country: ${this.state.country}`);
        console.log(`Class: ${this.state.class}`);
        
        this.setState({
            email: '',
            password: '',
            passwordRepeat: '',
            name: '',
            country: '',
            class: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Sign Up</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>e-mail: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
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
                        <label>Repeat Password: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.passwordRepeat}
                                onChange={this.onChangePasswordRepeat}
                                />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Country: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.country}
                                onChange={this.onChangeCountry}
                                />
                    </div>
                    <div className="form-group">
                        <label>Class: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.class}
                                onChange={this.onChangeClass}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Sign Up" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}