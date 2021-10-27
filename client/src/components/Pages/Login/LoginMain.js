import React from 'react'
import About from './About';
import tutorImage from '../../../images/tutorImage.jpeg';
import parentImage from '../../../images/parentImage.jpeg';
//import mainBackground from '../../images/mainBackground.jpeg';
import Navbar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer'
import './main.css';

const LoginMain = () => {

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
        <>
        <div className="background" >
            <Navbar />

            <div style={{padding: "15px"}}>
            </div>

            <div className="text-center">
                <h2 className="label">Sign In</h2>
            </div>
            

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
            
            </div>       

            <div style={{padding: "15px"}}>
            </div>

            <About />     
        </div>

        {/* <div style={{padding: "15px"}}>
            </div> */}

        <Footer />
        </>
    )
}

export default LoginMain
