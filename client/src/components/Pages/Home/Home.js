import React from 'react'
import NavBar from '../../NavBar/NavBar';
import StudentInfoForm from './StudentInfoForm';
import About from '../Login/About';
import Footer from '../../Footer/Footer';

import './home.css'

const Home = () => {
    return (
        <>
        <div className="background" >
            <NavBar />
            <div style={{padding: "1%"}}>
            </div>

            <StudentInfoForm />

            <div style={{padding: "1%"}}>
            </div>

            <About />     
        </div>

        <Footer />
        </>
    )
}

export default Home
