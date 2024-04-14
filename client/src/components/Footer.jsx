import "../styles/Footer.scss"
import { LocalPhone, Email } from "@mui/icons-material"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src="/assets/logo.png" alt="logo" /></a><br />
        <p>Explore luxurious villas, cozy cottages, and everything in between.</p>
        <div className="socila_media" style={{marginTop: "30px" , fontSize: "25px" , color: "blue"}}>
        <FaFacebook style={{marginRight: "20px" , cursor: "pointer"}}/>
        <FaTwitter style={{marginRight: "20px" , cursor: "pointer"}}/>
        <FaInstagramSquare style={{marginRight: "20px" , cursor: "pointer"}}/>
        <FaLinkedin style={{marginRight: "20px" , cursor: "pointer"}}/>
        <IoLogoYoutube style={{fontSize: "30px" , cursor: "pointer"}}/>
        </div>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul style={{fontWeight: "600"}}>
          <li style={{marginBottom: "35px"}}>About Us</li>
          <li style={{marginBottom: "35px"}}>Terms and Conditions</li>
          <li>Return and Refund Policy</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+94 33 234 3457</p>
        </div>
        <br />
        <div className="footer_right_info">
          <Email />
          <p>bookmylodge@support.com</p>
        </div>
        <br />
        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  )
}

export default Footer;