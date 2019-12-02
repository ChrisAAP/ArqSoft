import React, { Component } from 'react';

export default class TeacherSite extends Component {

    constructor(props) {
        super(props);

        this.onChangeAcademic = this.onChangeAcademic.bind(this);
        this.onChangeTeamwork = this.onChangeTeamwork.bind(this);
        this.onChangeCommunication = this.onChangeCommunication.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            academic: '',
            teamwork: '',
            communication: '',
            accepted: false
        }
    }

    onChangeAcademic(e) {
        this.setState({
            academic: e.target.value
        });
    }

    onChangeTeamwork(e) {
        this.setState({
            teamwork: e.target.value
        });
    }

    onChangeCommunication(e) {
        this.setState({
            communication: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Academic: ${this.state.academic}`);
        console.log(`Team Work: ${this.state.teamwork}`);
        console.log(`Communication Skills: ${this.state.communication}`);
        
        this.setState({
            academic: '',
            teamwork: '',
            communication: '',
            accepted: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Submit Grades</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Academic: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.academic}
                                onChange={this.onChangeAcademic}
                                />
                    </div>
                    <div className="form-group">
                        <label>Team Work: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.teamwork}
                                onChange={this.onChangeTeamwork}
                                />
                    </div>

                    <div className="form-group">
                        <label>Communication Skills: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.communication}
                                onChange={this.onChangeCommunication}
                                />
                    </div>
                    

                    <div className="form-group">
                        <input type="submit" value="Submit Grades" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}