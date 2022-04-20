import React from "react";
import './contactPage.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
    return (
        <>
            <div className="contact">
                <div className="contact-info">
                    <h2>There are plenty ways to contact me</h2>
                    <div className="link-list">
                        <a href="https://www.linkedin.com/in/sascha-wagner-99595721b/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                        <a href="https://www.instagram.com/sichat_music/"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                        <a href="https://www.tiktok.com/@sichat13"><FontAwesomeIcon icon={faTiktok} size="2x"/></a>
                        <a href="https://www.facebook.com/sascha.drumanimal"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage