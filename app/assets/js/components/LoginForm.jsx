import React from 'react';

class LoginForm extends React.Component {
    render() {
        return (
            <div className="container">
                <form className="register-login" onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <a className="register-link" href="/register"><h5>Create account</h5></a>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="text" className="form-control" id="email" ref={(input) => this.email = input} />
                    </div>

                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" id="password" ref={(input) => this.password = input} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}
export default LoginForm;