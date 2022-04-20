import React from "react";
import './musicianSelectScreen.css'

const MusicianSelectScreen = () => {
    return (
        <div className="container">
           <div className="link--container">

               <div className="link">
                   <a href="/musician/sichat">
                       <h3 id="title">SicHat</h3>
                       <p id="title-line">My Ambition</p>
                   </a>
               </div>

               <div className="link">
                   <a href="/musician/drummer">
                       <h3 id="title">Drummer</h3>
                       <p id="title-line">My Passion</p>
                   </a>
               </div>
               
            </div>
        </div>
    )
}

export default MusicianSelectScreen