import React from "react";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';


const Contact = () => {
  return (
    <div>

      <Navbar />

      <section className="contact">
    
            <div className="contact-title">
                <div cliassName="c-title">
                    <h2>Connect With Us</h2>
                </div>
                
                <p>We’re here to help you find your perfect property. Whether you have questions about listings, need assistance with the website, or want to speak with a real estate expert, our team is ready to assist you.</p>
            </div>

           

            <div className="c-form">

                <div className="message">
                    <h2>Send Message</h2>
                </div>

                <div className="contactForm">

                    <form action="">

                        <div className="inputbox">
                            <input type="text" name="full_name" required id="full_name" />
                            <span>User Name</span>
                        </div>

                        <div className="inputbox">
                            <input type="email" name="email" required id="email" />
                            <span>Email</span>
                        </div>

                        <div className="inputbox">
                            <textarea required id="message"></textarea>
                            <span>Type your message here...</span>
                        </div>

                        <div className="inputbox">
                            <input type="submit" value="Send" />
                        </div>

                </form>
            </div>

        </div>

      </section>
      <Footer/>
    </div>
  );
};

export default Contact;