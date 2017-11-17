import React from 'react';
import axios from 'axios';

import ReactPasswordStrength from 'react-password-strength';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            error: '',
            password: ''
        };
    }
    changeCallback(state) {
        this.setState({ password: state.password });
    }
    handleSubmit(event) {
        axios.get('/api/v1/user/checkMail/' + this.email.value)
            .then(res => {
                const isExist = res.data;
                if (isExist) {
                    this.setState({ error: 'Email already exist' });
                }
                if (!isExist) {
                    axios.post('/api/v1/user', {
                        name: this.name.value,
                        email: this.email.value,
                        password: this.state.password
                    })
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            });
        event.preventDefault();
      
    }
    render() {
        return (
            <div className="container">
                <form className="register-login" onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" id="name" ref={(input) => this.name = input} />
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="text" className="form-control" id="email" ref={(input) => this.email = input} />
                        <small className="error-message">{this.state.error}</small>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <ReactPasswordStrength
                            minLength={6}
                            minScore={2}
                            scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
                            inputProps={{ name: "password", autoComplete: "off", className: "form-control" }}
                            changeCallback={this.changeCallback.bind(this)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
            
        )
    }
}
export default RegisterForm;