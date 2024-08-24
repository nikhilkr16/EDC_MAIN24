import React from "react";
import './footer.css';
import edclogo from "../../assets/edclogo.png";

import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer=()=>{
    return (
        <div className="footer">
            <div className="sb__footer section__padding flex flex-col justify-center items-center">
                <div className="sb__footer-links">
                <div className="sb__footer-links_edc">
                        
                        <div className="para flex flex-col align-items">
                        <p>Our aim is to Thrive a COMMUNITY.</p>
                        <div className="socialmedia">
                           <p><FaFacebook className="facebookIcon" /></p>
                            <p><FaInstagram className="instagramIcon" ></FaInstagram></p>
                            <p><FaLinkedinIn className="linkedinIcon"></FaLinkedinIn></p>
                        </div>
                        </div>
                    </div>
                    <div className="sb__footer-links_div">
                        <h3>QUICK LINK</h3>
                        <a href="/Dean">
                           <p>Founders</p>
                        </a>
                        <a href="/FA">
                           <p>Team</p>
                        </a>
                        <a href="/hall of Fame">
                           <p>Hall of Fame</p>
                        </a>
                        <a href="/Contact">
                           <p>Contact Us</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                    <h3>Our Services</h3>
                        <a href="/Dean">
                           <p>Pickup</p>
                        </a>
                        <a href="/FA">
                           <p>KudaPeti</p>
                        </a>
                        <a href="/hall of Fame">
                           <p>Price Calculator</p>
                        </a>
                        <a href="/Contact">
                           <p>Will think what to keep here ;-| </p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                    <h3>Help</h3>
                        <a href="/Dean">
                           <p>Privacy policy</p>
                        </a>
                        <a href="/FA">
                           <p>Support</p>
                        </a>
                        <a href="/hall of Fame">
                           <p>Terms & Conditions</p>
                        </a>
                    </div>
                </div>
                <div className="sb__footer-below">
                       <div className="sb__footer-copyright">
                         <p>
                            Copyright @{new Date().getFullYear()} Waste Wisely, BIT Mesra. All rights reserved.
                        </p>
                       </div>
                       </div>
            </div>
        </div>
    )
}

export default Footer;