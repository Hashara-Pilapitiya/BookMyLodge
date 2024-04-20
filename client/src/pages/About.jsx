import React from 'react';
import '../styles/About.css';
import Navbar from '../components/Navbar';
import { FaHouse } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { MdDescription } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import Footer from "../components/Footer";
import Image1 from "../Assets/hasharaa.jpg";
import Image2 from "../Assets/nishiki.jpg";
import Image3 from "../Assets/anujan.jpg";

const About = () => {

  return (
    <div>
        <Navbar />

        <div className='about-first'>

            <div className='about-title'>
                <h1>Welcome to BookMyLodge – Your Gateway to Finding the Perfect Home!</h1>
            </div>

        </div>

        <div className='about-story'>

            <h2>Our Story</h2>

            <p>Founded in 2015, BookMyLodge was born out of a passion for real estate and technology. Our founders, BookMyLodge, recognized a need for a more intuitive, user-friendly platform that simplifies the home searching process. With decades of combined experience in real estate, our team understands the industry's nuances and the challenges buyers, renters, and investors face. We are here to solve those challenges, bringing clarity and convenience to your property search. Our mission is to empower our users with the tools, insights, and data they need to make informed real estate decisions.</p>

        </div>

        <div className='about-features'>

            <h2>Features of BookMyLodge</h2>

            <div className='featureBoxesContainer'>

               <div className='featureBoxStyle'>
                   <FaHouse className='iconStyle'/>
                   <p>Wide Range of Listings</p>
                </div>

                <div className='featureBoxStyle'>
                    <CgWebsite className='iconStyle' />
                    <p>User-Friendly Interface</p>
                </div>


                <div className='featureBoxStyle'>
                    <MdDescription className='iconStyle' />           
                    <p>Detailed Property Descriptions</p>
                </div>


                <div className='featureBoxStyle'>
                    <TbBrandBooking className='iconStyle' />
                    <p>Secure Booking Process</p>
                </div>

                <div className='featureBoxStyle'>
                    <BiSupport className='iconStyle' />
                    <p>Customer Support</p>
                </div>

            </div>

        </div>

        <div className='vision'>

            <h2>Our Vision</h2>

            <p>To be the most trusted and convenient online real estate resource, guiding millions of people to effortlessly find and secure their perfect property.</p>

        </div>

        <div className='about-team'>

            <h2>Our Team</h2>

            <div className='teamBoxesContainer'>

               <div className='teamBoxStyle'>
                   <img src={Image1} alt='' className='iconStyle'/>
                   <p>H.M.H.N.Pilapitiya</p><br />
                   <p className='email'>hasharanethmi2020@gmail.com</p>
                </div>

                <div className='teamBoxStyle'>
                    <img src={Image2} alt='' className='iconStyle' />
                    <p>Nishiki Senanayake</p><br />
                    <p className='email'>nishiki@gmail.com</p>
                </div>


                <div className='teamBoxStyle'>
                    <img src={Image3} alt='' className='iconStyle' />           
                    <p>Anujan</p><br />
                    <p className='email'>anujan@gmail.com</p>
                </div>

            </div>

        </div>

        <br /><br /><br />

        <Footer />

    </div>
  )
}

export default About;