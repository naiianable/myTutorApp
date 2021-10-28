import React from 'react'

import './login.css';

const ParentLogin = () => {
    return (
        <div>
            <p className="text-center">Parent Login</p>
            <form className="form-control">
                <div className="form-group text-center">
                    <div>
                        <label for="exampleInputEmail1">Email address:</label>
                    </div>
                    <input type="email" className="col-xs-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <div>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                </div>
                <div className="form-group text-center">
                    <div>
                        <label for="exampleInputPassword1">Password:</label>
                    </div>
                    <input type="password" className="col-xs-3" id="exampleInputPassword1" placeholder="Password" />
                </div>
                {/* <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <div className="col-xs-12 button-wrapper text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ParentLogin
