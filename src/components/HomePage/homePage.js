import React from "react";
import './homePage.css'

import IconBox from "../IconBox/iconBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faCode, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
    return (
       <div className="home--container">
           <div className="home--content">
               <h1 id="home-header">Sascha "SicHat" Wagner</h1>
               <div className="home--underline">
                    <h4>Musician / Developer / Teacher</h4>
                    <a href="/contact"><button>Contact me</button></a>
               </div>
           </div>
           <div className="iconrow">
            <a href="/musician" id="ibox">
                <IconBox
                    pic={<FontAwesomeIcon icon={faMusic} size="1x"/>}
                    text="my passion and ambition"
                />
            </a>
            <a href="/developer" id="ibox">
                <IconBox
                    pic={<FontAwesomeIcon icon={faCode} size="1x"/>}
                    text="when and why i started coding"
                />
            </a>
            <a href="/teacher" id="ibox">
                <IconBox
                    pic={<FontAwesomeIcon icon={faChalkboardTeacher} size="1x"/>}
                    text="about science & inherent talents"
                />
            </a>
           </div>
       </div>
    )
}

export default HomePage