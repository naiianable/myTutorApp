import React from 'react'
// import { Link } from "react-router-dom";

const Navbar = () => {

    let navBar;

    //return different navbar depending on if user is logged in or not


    return (
        <div>
         
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav mr-auto">
                    <h3><a href="/" style={{textDecoration: "none", color:"inherit"}}>TutorApp</a></h3>
                </ul>

                <div className="collapse navbar-collapse ml-auto" id="navbarNav">
                    <ul className="navbar-nav">
                        
                        {/* CHANGE THESE BUTTONS BACK TO A TAGS WHEN THERE ARE VALID LINKS */}
                        <li className="nav-item">
                            <button className="nav-link" href="#">Become a Tutor</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#">Create an Account</button>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/loginMain">Login</a>
                        </li>
                    </ul>
                </div>

            </nav>
           
            
        </div>
    )
}

export default Navbar
