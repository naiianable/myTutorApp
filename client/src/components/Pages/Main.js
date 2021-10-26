import React from 'react'
import tutorImage from '../../images/tutorImage.jpeg';
import parentImage from '../../images/parentImage.jpeg';
import './main.css';

const Main = () => {

    // const [loginOptions, setLoginOptions] = useState(true) 

    // let mainDisplay;

    // let displayOptions = (e) => {
    //     e.preventDefault();
    //     setLoginOptions(false);
        
    // }
    // // console.log("this is the click option", loginOptions)

    // if(loginOptions === true) {
    //     mainDisplay = 
        
    // } else {
    //     return
    // }
    return (
        <div className="text-center">
            <div>
                <h1>Welcome to TutorApp</h1>
            </div>

            {/* <div className="border w-25 rounded">
                <div>
                    <a className="btn btn-light" href="/tutorLogin"> 
                    Tutor Login
                    </a>
                </div>
            
                
            </div>

            <div className="border w-25 rounded">
                <div>
                    <a className="btn btn-light" href="/parentLogin"> 
                    Parent Login
                    </a> 
                </div>
            </div> */}

            <div className="col d-flex justify-content-center">

            <div className="card" style={{width: "18rem", margin: "5px"}}>
                <img className="card-img-top" src={tutorImage} alt="tutorImg" />
                    <div className="card-body">
                        <h5 className="card-title">Tutors</h5>
                        <p className="card-text">Some text to explain to login if you're a tutor</p>
                        <a href="/tutorLogin" className="btn btn-primary">Sign In!</a>
                    </div>
            </div>

            <div className="card" style={{width: "18rem", margin: "5px"}}>
                <img className="card-img-top" src={parentImage} alt="parentImg" />
                    <div className="card-body">
                        <h5 className="card-title">Parents</h5>
                        <p className="card-text">Some text to explain to login if you're a parent</p>
                        <a href="/parentLogin" className="btn btn-primary">Sign In!</a>
                    </div>
            </div>
                
                {/* <div className="col-sm-6 col-md-4 img-thumbnail">
                    <div className="thumbnail">
                        <img src={tutorImage} alt="tutorImg" className="img-thumbnail" />
                            <div className="caption">
                                <h3>Tutors</h3>
                                    <p>Some text to explain to login if you're a tutor</p>
                                    <p>
                                        <a href="/tutorLogin" className="btn btn-primary" role="button">Sign In!</a>
                                    </p>
                            </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 float-right img-thumbnail">
                    <div className="thumbnail">
                        <img src={parentImage} alt="parentImg" className="img-thumbnail" />
                            <div className="caption">
                                <h3>Parents</h3>
                                    <p>Some text to explain to login if you're a parent</p>
                                    <p>
                                        <a href="/parentLogin" className="btn btn-primary" role="button">Sign In!</a>
                                    </p>
                            </div>
                    </div>
                </div> */}
            
            </div>            
        </div>
    )
}

export default Main
