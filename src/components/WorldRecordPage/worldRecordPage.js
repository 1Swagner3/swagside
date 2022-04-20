import React from "react";
import './worldRecord.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faYoutube, faWikipediaW, faFacebook } from "@fortawesome/free-brands-svg-icons";

const WorldRecordPage = () => {
    return (
        <>
            <div className="worldrecord-container">
                <div className="wr-header">
                    <h1>Worldrecord</h1>
                    <h3>World's deepest playing band</h3>
                    <br></br>
                    <h2 id="wtb">Way to Bodhi</h2>
                </div>
            </div>
            <div className="wr-section2">
                <div>
                    <h3>The Vision</h3>
                    <p>
                        Some things just come to you while you’re approaching totally different things. 
                        That’s how I like to discribe this little story. 
                        I got to know the band over the internet during my Australia journey. 
                        After I returned from the other side of the world I nearly <em>instantly</em> packed my stuff and drove to Stuttgart to get to know them. 
                        They were looking for a <a href="/musician/drummer" style={{textDecoration:"underline"}}>drummer</a> and after one rehearsal we all knew that the synergy was just right.
                    </p>
                    <p>
                        So i moved to Stuttgart. 
                        I started to study technical biology so my parents would shout up about my alter motives. 
                        We started immediately working on a new Album. 
                        A project that was put off due to the loss of the previous drummer. 
                        During the writing process we wanted to create a <em>massive sound</em>. 
                        We wanted to have the thickest sounding guitars we could imagine. 
                        A sound beyond brutal, that was our goal.
                    </p>
                </div>
                <img src="/pictures/WorldRecord.jpg"/>
            </div>
            <div className="wr-section3">
                <div className="wr-video">
                    <a href="https://open.spotify.com/artist/6q2mJv76J1l5CqstTe8iFK?si=TbZ7usn7RH6gMxjg4mg-SQ"><FontAwesomeIcon icon={faSpotify} size="3x"/></a>
                    <a href="https://www.youtube.com/results?search_query=way+to+bodhi"><FontAwesomeIcon icon={faYoutube} size="3x"/></a>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/j5hrB9vwE58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <a href="https://de.wikipedia.org/wiki/Way_to_Bodhi"><FontAwesomeIcon icon={faWikipediaW} size="3x"/></a>
                    <a href=""><FontAwesomeIcon icon={faFacebook} size="3x"/></a>
                </div>
            </div>
            <div className="wr-section4">
                <img src="/pictures/WtbPic2.jpg"/>
                <div>
                    <h3>The Decision</h3>
                    <p>
                        To accomplish this we started to tune down our guitars <em>way below</em> any reasonability. 
                        Ordering thicker and thicker strings for our instruments just so they could sound even deeper. 
                        At some point our string manufacturer told us that he never made such deep guitar strings. 
                        <em>„At this point you might just be world’s deepest band“</em> he said and we laughed. 
                    </p>
                    <p>
                        Believe it or not but this was never part of our plan to begin with. 
                        Still, the thought didn’t let me sleep that night and so I started researching. 
                        As it turned out there really was no band with such a deep guitar tuning to be found. 
                        I brought it up in our next writing session and the decision was swift. 
                        We would become <em>world’s deepest playing band</em>. 
                    </p>
                </div>
            </div>
            <div className="wr-section5">
                <div className="wr-section5-p">
                    <div>
                        <h3>About Science and Earthquakes</h3>
                        <p>
                            That’s the part when tons of science took over our creation process. 
                            First we had to develop a bass guitar that could play an octave under our guitar. 
                            We are talking about a root note of <em>15 hz</em> deep, that’s an <em>earthquakes</em> frequency area … just saying. 
                            It took a very sophisticated bass guitar manufacturer and two universities to bring this monster to life. 
                            That’s why called it <em>Monster 40</em>.
                        </p>
                    </div>
                    <div>
                        <h3>The Evidence</h3>
                        <p>
                            Our producer had a few sleepless nights making this frequency audible on our album. 
                            And with the help of an oscilloscope at the university of stuttgart we were finally able to prove to the world that we are indeed world’s deepest band. 
                            We played a concert with newly build speakers that were able to transfer those deep frequencies and the world went crazy over our accomplishment.
                        </p>
                    </div>
                </div>
            </div>
            <div className="wr-section6">
                <div>
                    <h3>The Hype</h3>
                    <p>
                        In the end I counted over <em>50 different</em> print media entires, radio shows and guest appearances in several shows. 
                        The entire music scene was talking about world’s deepest band. 
                        While a truly amazing thing to be part of one thing made us even happier: we finally were able to create the sound we envisioned for so long.
                    </p>
                </div>
                <img src="/pictures/WtbPic4.jpg"/>
            </div>
        </>
    )
}

export default WorldRecordPage