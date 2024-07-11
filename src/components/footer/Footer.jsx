import React from "react";
import './footer.css';
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";
import LinkedIn from "../../assets/LinkedIn.png";
import edclogo from "../../assets/edclogo.png";


const Footer=()=>{
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                <div className="sb__footer-links_edc">
                        <div className="sb__footer-links_edc_upper">
                        <p><img src={edclogo} className="img01" alt="" /> </p>     
                        <h4>Entrepreneurship
                        Development Cell</h4>
                        </div>
                        <div className="para">
                        <p>We strive to be at the forefront of technological advancements and industry best practices, consistently exceeding the expectations of our clients.</p>
                        <div className="socialmedia">
                            <p><img src={Facebook} alt="" /></p>
                            <p><img src={Instagram} alt="" /></p>
                            <p><img src={LinkedIn} alt="" /></p>
                        </div>
                        </div>
                    </div>
                    <div className="sb__footer-links_div">
                        <h3>QUICK LINK</h3>
                        <a href="/Dean">
                           <p>Dean of RIE</p>
                        </a>
                        <a href="/FA">
                           <p>Faculty Advisor</p>
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
                           <p>Chemical Research</p>
                        </a>
                        <a href="/FA">
                           <p>Construction Material</p>
                        </a>
                        <a href="/hall of Fame">
                           <p>Agriculture Engineering</p>
                        </a>
                        <a href="/Contact">
                           <p>Automotive & Systems</p>
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

                       <div className="sb__footer-below">
                       <div className="sb__footer-copyright">
                         <p>
                            Copyright @{new Date().getFullYear()} EDC, BIT Mesra. All rights reserved.
                        </p>
                       </div>
                       </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;