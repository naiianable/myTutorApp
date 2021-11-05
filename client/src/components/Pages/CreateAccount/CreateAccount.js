import React from 'react'

import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';

import './createAccount.css';

const CreateAccount = () => {
    return (
        <div className="background">

            <NavBar />

            <div style={{padding: "1%"}}>
            </div>

            <form className="gen-info-form border rounded">
                <div className="header text-center">
                    <h3>Create Your Account</h3>
                </div>

                <div className="row">
                    <div className="form-group col-md-6">
                        <label for="studentfirstname">Student First Name</label>
                            <input className="form-control"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="studentlastname">Student Last Name</label>
                            <input className="form-control"></input>
                    </div>
                </div>

                <div>
                    <div className="row">
                        <div style={{paddingTop: "2%"}}></div>
                            <label  style={{fontSize:"110%"}} for="parent1info">Parent/Guardian 1</label>
                                <div className="form-group col-md-6">
                                    <label for="parent1name">Name</label>
                                    <input className="form-control"></input>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="parent1phone">Contact Number</label>
                                    <input className="form-control"></input>
                                </div>
                    </div>
                    <div className="row">
                            <div className="form-group col-md-6">
                                <label for="parent1email">Email</label>
                                <input className="form-control"></input>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="parent1relationship">Relationship</label>
                                <input className="form-control"></input>
                            </div>
                    </div>
                    <div className="row">
                            <div className="form-group">
                                <label for="parent1address">Address</label>
                                <input className="form-control"></input>
                            </div>
                    </div>
                    <div className="row">
                            <div className="form-group col-md-6">
                                <label for="parent1zipcode">Zipcode</label>
                                <input className="form-control"></input>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="parent1state">State</label>
                                    <select className="form-control">
                                        <option>Select</option>
                                        <option>Hawaii</option>
                                        <option>California</option>
                                    </select>
                            </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="studentaddress-p1" />
                        <label className="form-check-label" for="studentaddress-p1">
                            Student Address
                        </label>
                    </div>
                </div>

                <div>
                    <div className="row">
                        <div style={{paddingTop: "2%"}}></div>
                            <label  style={{fontSize:"110%"}} for="parent1info">Parent/Guardian 1</label>
                                <div className="form-group col-md-6">
                                    <label for="parent2name">Name</label>
                                    <input className="form-control"></input>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="parent2phone">Contact Number</label>
                                    <input className="form-control"></input>
                                </div>
                    </div>
                    <div className="row">
                            <div className="form-group col-md-6">
                                <label for="parent2email">Email</label>
                                <input className="form-control"></input>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="parent2relationship">Relationship</label>
                                <input className="form-control"></input>
                            </div>
                    </div>
                    <div className="row">
                            <div className="form-group">
                                <label for="parent2address">Address</label>
                                <input className="form-control"></input>
                            </div>
                    </div>
                    <div className="row">
                            <div className="form-group col-md-6">
                                <label for="parent2zipcode">Zipcode</label>
                                <input className="form-control"></input>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="parent2state">State</label>
                                    <select className="form-control">
                                        <option>Select</option>
                                        <option>Hawaii</option>
                                        <option>California</option>
                                    </select>
                            </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="studentaddress-p2" />
                        <label className="form-check-label" for="studentaddress-p2">
                            Student Address
                        </label>
                    </div>
                </div>

                <div style={{paddingTop: "1%"}}>
                    <button type="submit" class="btn btn-primary mb-2">Register</button>
                </div>
            </form>

            <div style={{padding: "5%"}}>
            </div>

            <Footer />
        </div>
    )
}

export default CreateAccount
