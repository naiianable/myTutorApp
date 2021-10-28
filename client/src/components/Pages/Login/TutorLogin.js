import React from 'react'

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';

import './login.css';

const TutorLogin = () => {
    return (
        <>

            <div className="background">
            <NavBar />

                <div style={{padding: "1%"}}></div>

                <div>
                    <div className="label text-center">
                        <h2>Tutor Login</h2>
                    </div>

                    <div>
                        <form className="tutor-login form-control">
                            <div className="form-group text-center">
                                <div>
                                    <label>Email address:</label>
                                </div>
                                <input type="email" className="col-xs-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <div>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <div>
                                    <label>Password:</label>
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

                       <div style={{padding: "1%"}}></div> 
                    </div>

                    

                </div>


                <Footer />
            </div>
        </>
    )
}

export default TutorLogin
