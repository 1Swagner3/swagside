import React from "react";
import './drummerPage.css'

import Skillcard from "../Skillcard/skillCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faNetworkWired, faCommentDots, faBrain, faPeopleGroup, faUser, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const DrummerPage = () => {
    return (
       <>
        <div className="drum-sec1">
            <div className="drum-sec1--content">
                <p>
                    I’ve been drumming now longer than <em>half of my life</em> ( about 20 years). 
                    The start was classic. With 5 I saw a drum solo on TV. A massive crowd, cheering the drummer while he performed at his most artistic element. 
                    I instantly knew: <em>„that’s where I wanted to be“</em>. 
                </p>
            </div>
        </div>
        <div className="drum-sec2">
            <div className="drum-sec2-content">
                <div className="drum-sec2-p">
                    <h3>Between Homework and Practice</h3>
                <p>
                    Of course my parents were everything but happy. 
                    Not only of my career choice but also about the instrument. 
                    Years past and every attempt to get my attention to another instrument failed. 
                    So when we moved into our own house time came that my parents gave in and bought me a very shabby drum kit. 
                    Thinking it was just a phase.
                </p>
                <p>
                    Well I guess you get the picture. 
                    I practiced like crazy, had a great drum teacher and the dream of becoming a <em>professional drummer</em> grew just stronger. 
                    During my school years I played in many bands. 
                    The day came when I finished my A-Levels and the question what to do now was inevitable. 
                </p>
                </div>
                
                <img src="/pictures/DrumPic1.jpg"/>
            </div>
        </div>
        <div className="drum-sec5">
            <img src="/pictures/DrumPic2.jpg"/>
            <div className="drum-sec5-p">
                <h3>The Australian Journey</h3>
                <p>
                    Thanks to my drumming deeds I made some very valuable friends. 
                    One of them invited me over to Australia. 
                    Offering me to cross the <em>entire continent</em> with him, through the desert from Perth to Darwin. 
                    Although I was a little worried that my drum skills would suffer from such a long trip I took the opportunity and flew over to the other side of the world.
                </p>
                <p>
                    When we arrived in Darwin my friend and I parted ways. 
                    It was time for me to explore the continent without him. 
                    And so the first and biggest problem arose: where and how to get <em>money</em> to finance my further journey? 
                    Knowing the on thing I could do I started playing drums in the streets of Darwin and see there, I made enough to live on my own. 
                    I even performed for a local TV show and got invited to <em>'Australia Got Talent'</em>.
                </p>
            </div>
        </div>
        <div className="drum-sec6">
            <div className="drum-sec6-p">
                <h3>Turning a dream into reality</h3>
                <p>
                    While traveling I started to think more about my future. 
                    Drumming payed off, <em>so this is working</em>!
                    After realizing that i was able to live from my art, i saw myself turning this dream of mine into reality.
                    I even started learning piano to imporve my musical skills further.
                    If i wanted to surpass all i did so far i couldn't be just a drummer, i had to become a <em>musician</em>. 
                    Not only playing things but creating, envisioning and inventing.
                </p>
                <p>
                    Still in Australia I found a <a href="/musician/worldrecord" style={{textDecoration:"underline"}}>band</a> in Stuttgart that was looking for a drummer. 
                    I fell in love with their sound and so I applied. 
                    The first thing I did after returning from Australian was grabbing my drums and driving over to Stuttgart to meet the guys in person.
                </p>
            </div>
        </div>
        <div className="drum-sec5">
            <img src="/pictures/DrumPic4.jpg" id="drumPic4"/>
            <div className="drum-sec5-p">
                <h3>A Drummer and his Worldrecord</h3>
                <p>
                    It was a match! 
                    We understood each other perfectly on every artistic level and this band - <a href='https://de.wikipedia.org/wiki/Way_to_Bodhi' style={{textDecoration:"underline"}}>Way to Bodhi</a> - became the band that should have a <em>massive impact</em> on my life. 
                    I worked with this band for the next 6 years. 
                    They were all much more experienced then I was and so naturally I learned a lot of things about band business, touring, production and so on. In 2015 we even accomplished a <a href="/musician/worldrecord" style={{textDecoration:"underline"}}>world record</a> together with our first album release. 
                </p>
                <p>
                    After we were officially announced as worlds deepest playing band, media over the entire globe went <em>crazy</em>. 
                    We had to make tons of interviews for all sorts of newspapers and magazines, were guests in several shows and American forums had entire threads just to talk about us. 
                </p>
            </div>
        </div>
        <div className="drum-sec7">
            <div className="drum-sec7-p">
            <div className="drum-sec7-cont">
                <h3>Teaching for the best</h3>
                <p>
                    A few years later I achieved another major milestone in my drum career. 
                    I became a teacher at the <em>most important</em> drum school in the entire D-A-CH area: the <a href="https://www.drumdepartment.de/?gclid=Cj0KCQjw3v6SBhCsARIsACyrRAnxlL4fgdkouu1jAtPmFfyksRM5iHFaClylbvfdCK2xGIQDZmmSUYAaArP5EALw_wcB" style={{textDecoration:"underline"}}>DrumDepartment</a>. 
                    That was a big deal for me since the first time I heard about this school when I was 16 years old. 
                    I knew, when I made it there I definitely came far in my career. 
                    I’ve been teaching drums there ever since. Teaching <em>50 - 60 students</em> every week and sharing my knowledge. 
                </p>
            </div>
            <div className="drum-sec7-cont">
                <h3>Tourlife</h3>
                <p>
                    Next to my teaching profession I used to tour a lot as a <em>professional drummer</em> for bands as well. 
                    That was before a certain virus messed everything up. 
                    But nonetheless did I see a lot of Europe during my touring days. 
                    From Spain to Poland I played a lot of countries and from time to time in front of a lot of people. 
                    I hope to pick up the touring life again after things have settled down a little. 
                </p>
            </div>

            
            </div>
            
        </div>
        <div className="drum-sec3">
            <h3>Here you can learn more about the worldrecord</h3>
            <a href="/musician/worldrecord"><button>Worldrecord</button></a>
        </div>
        <div className="section4">
            <h3>Here are some of the skills i picked up along the way</h3>
            <div className="skillrow">
                <Skillcard
                    pic={<FontAwesomeIcon icon={faClock} size="1x"/>}
                    text='Time Management'
                />
                <Skillcard
                    pic={<FontAwesomeIcon icon={faNetworkWired} size="1x"/>}
                    text='Networking'
                />
                <Skillcard
                    pic={<FontAwesomeIcon icon={faCommentDots} size="1x"/>}
                    text='Communication'
                />
                <Skillcard
                    pic={<FontAwesomeIcon icon={faBrain} size="1x"/>}
                    text='Psychology'
                />
                <Skillcard
                    pic={<FontAwesomeIcon icon={faPeopleGroup} size="1x"/>}
                    text='Teamwork'
                />
                <Skillcard
                    pic={<FontAwesomeIcon icon={faUser} size="1x"/>}
                    text='Leadership'
                />
                <Skillcard
                    pic={<FontAwesomeIcon icon={faBriefcase} size="1x"/>}
                    text='Self-Discipline'
                />
            </div>
        </div>
       </>
    )
}

export default DrummerPage