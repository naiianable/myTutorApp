import React from 'react'

const StudentInfoForm = () => {
    return (
        <div>
            <form className="gen-info-form border rounded">
                <div className="header text-center">
                    <h3>Find a Tutor</h3>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label for="grade-level">Grade Level</label>
                            <select className="form-control">
                                <option>Select</option>
                                <option>Pre-School</option>
                                <option>Elementary (K - 5)</option>
                                <option>Middle (6 - 8)</option>
                                <option>High School (9 - 12)</option>
                                <option>College</option>
                            </select>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="subject">Subject</label>
                            <select className="form-control">
                                <option>Select</option>
                                <option>Math</option>
                                <option>English</option>
                                <option>Science</option>
                                <option>Reading</option>
                                <option>College</option>
                            </select>
                    </div>
                </div>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Special Requests</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="row">
                    <div className="form-group col-md-6">
                        <label>Zip Code</label>
                        <input className="form-control"></input>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="state-from">State</label>
                            <select className="form-control">
                                <option>Select</option>
                                <option>Hawaii</option>
                                <option>California</option>
                            </select>
                    </div>
                </div>

                <div>
                    <button type="submit" class="btn btn-primary mb-2">Find a Tutor!</button>
                </div>
            </form>
        </div>
    )
}

export default StudentInfoForm
