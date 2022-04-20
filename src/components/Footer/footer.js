import React from 'react'
import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin, faFacebook, faTiktok, faSpotify, faYoutube, faItunes, faDeezer } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <>
            <div className='footer--container'>
                <div className='footer-content'>
                    <div className='contact-icons'>
                        <h2>Get in contact</h2>
                        <div className="link-list">
                            <a href="https://www.linkedin.com/in/sascha-wagner-99595721b/"><FontAwesomeIcon icon={faLinkedin} size="1x"/></a>
                            <a href="https://www.instagram.com/sichat_music/"><FontAwesomeIcon icon={faInstagram} size="1x"/></a>
                            <a href="https://www.tiktok.com/@sichat13"><FontAwesomeIcon icon={faTiktok} size="1x"/></a>
                            <a href="https://www.facebook.com/sascha.drumanimal"><FontAwesomeIcon icon={faFacebook} size="1x"/></a>
                        </div>
                        <div className='musiclinks'>
                            <h2>Check out my music</h2>
                            <div className='link-list'>
                                <a href="https://open.spotify.com/artist/2pNriAxaGNyGHTZqTU51Oo?si=yB_v1-dvS9ewjTwzF48rWQ"><FontAwesomeIcon icon={faSpotify} size="1x"/></a>
                                <a href="https://www.youtube.com/channel/UCByFi5AaQ7lL8WHU1H2IQXg"><FontAwesomeIcon icon={faYoutube} size="1x"/></a>
                                <a href="https://music.apple.com/de/artist/sichat/1493955113?l=en"><FontAwesomeIcon icon={faItunes} size="1x"/></a>
                                <a href="https://deezer.page.link/iyRn9WJnzF58zGQ26"><FontAwesomeIcon icon={faDeezer} size="1x"/></a>
                            </div>
                        </div>
                    </div>
                    <div className='quick-links'>
                        <h2>Quick-Links</h2>
                        <a href='/'>Home</a>
                        <a href='/musician/sichat'>SicHat</a>
                        <a href='/musician/drummer'>Drummer</a>
                        <a href='/musician/worldrecord'>Worldrecord</a>
                        <a href='/developer'>Developer</a>
                        <a href='/teacher'>Teacher</a>
                        <a href='/contact'>Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;