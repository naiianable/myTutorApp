import React from 'react'
import Navbar from '../NavBar/NavBar';
import StudentInfoForm from './StudentInfoForm';
import About from './Login/About';
import Footer from '../Footer/Footer';

import './home.css'

const Home = () => {
    return (
        <>
        <div className="background" >
            <Navbar />

            <div style={{padding: "15px"}}>
            </div>

            <StudentInfoForm />

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

export default Home
