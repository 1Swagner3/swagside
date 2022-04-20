import React from "react";
import './teacher.css'

import Skillcard from "../Skillcard/skillCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faChartSimple, faInfo, faGraduationCap, faChartPie, faChalkboardTeacher, faSchool, faFlask, faPen, faNetworkWired} from "@fortawesome/free-solid-svg-icons";


const TeacherPage = () => {
    return (
        <>
            <div className="teacher-container">
                <div className="teacher-content">
                    <h3>There is no such thing as talent</h3>
                    <p>
                        So … hands down. 
                        I would never go to such lengths to assume that I was born with any form of <em>talent</em> or anything like that. 
                        Constant work shaped what I am today. Buuuuut if we had to talk about talents, I’d say that <em>teaching</em> is the one inherent talent I posses. 
                    </p>
                    <p>
                        I was teaching people ever since. 
                        From the 5th grade on I was explaining classes, concepts and homework to everyone who asked me. 
                        And naturally people were drawn to me for my explanations.
                    </p>
                    <p>
                        When I moved to Stuttgart after my journey to Australia I wanted to focus on my <a href="/musician" style={{textDecoration:"underline"}}>music career</a> but my parents where everything but pleased about my life choices. 
                        So I studied <a href="https://www.uni-stuttgart.de/studium/bachelor/technische-biologie-b.sc./" style={{textDecoration:"underline"}}>technical biology</a> at the university Stuttgart. 
                        For me an alibi to keep working on my music, for most others an elite study course with high entrance demands. 
                    </p>
                </div>
                <div className="section4">
                    <h3>Here are some of the skills i picked up along the way</h3>
                    <div className="skillrow">
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faBook} size="1x"/>}
                        text='Researching'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faChartSimple} size="1x"/>}
                        text='Data Analytics'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faChartPie} size="1x"/>}
                        text='Data Science'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faGraduationCap} size="1x"/>}
                        text='Pedagogy'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faChalkboardTeacher} size="1x"/>}
                        text='Presentation'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faSchool} size="1x"/>}
                        text='Teaching'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faFlask} size="1x"/>}
                        text='Scientific Working'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faPen} size="1x"/>}
                        text='Scientific Writing'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faNetworkWired} size="1x"/>}
                        text='Project Management'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faInfo} size="1x"/>}
                        text='Information Processing'
                    />
                    </div>
                </div>
            </div>
            <div className="teach-sec1">
                <div>
                    <h3>About Cancer and Cash</h3>
                    <p>
                        I was handed the Bachelor of Science after 4 years. 
                        And while I hated most of my courses I really enjoyed working in the laboratory for my bachelor thesis. 
                        I ended up in a group of amazingly inspiring people that gave me the freedom to do <em>both</em>, science and music.
                        My professor was working on an important method for the analysis of cancer cells. 
                        Truly some pioneering stuff. 
                        Naturally I did my part and wrote my thesis about <em>histone analysis</em>.
                    </p>
                    <p>
                        Because my parents never had much money I had to take care of this issue myself. 
                        One thing you hear science students do a lot for some cash is private tutoring. 
                        So I started to give private lessons for all school levels and nearly every subject. 
                        Thanks to my teaching skills I never had to worry about preparation or anything like that. 
                        Things just came to me and I tought my students well.
                    </p>
                </div>
                <img src="/pictures/TeacherPic1.jpg"/>
            </div>
            <div className="teach-sec2">
                <div className="teach-sec2-content">
                    <div className="teach-sec2-p">
                        <h3>Saying Goodbye to my Docotortitle</h3>
                        <p>
                            Word spread and a year later I got an offer from a <a href="https://www.privatakademie.de/?gclid=Cj0KCQjw3v6SBhCsARIsACyrRAmFpOTREIWN0-RhlSq7vDfp8E7e2eUPQUJig6wst_K-yxBj1f3jVOgaAv_KEALw_wcB" style={{textDecoration:"underline"}}>private academy</a> to teach their medicine students in biochemistry. 
                            So parallel to my work in the lab I was now a teacher for biochemistry at a private academy. 
                            And you guessed it - <em>I was damn good at it</em>. 
                        </p>
                        <p>
                            At the end of my studies I was offered a doctor position. 
                            Skipping the Master degree and going straight to doctor. 
                            That was quite a <em>big deal</em>. 
                            Working at a doctor position would have ensured some cash flow while I could have kept working on our project. 
                            Unfortunately it is an impossible procedure in Germany. 
                            So i said my goodbyes and left. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="teach-sec3">
                <div className="teach-sec3-cont">
                    <div>
                        <h3>The way of the Teacher</h3>
                        <p>
                            For the next 7 years I kept working as a science teacher at the academy. 
                            And I have to say teaching I quite an <em>intriguing profession</em>. 
                            There is a good reason why teachers are enjoying such high praise in society.
                        </p>
                        <p>
                            Obviously you need a <em>tremendous</em> amount of knowledge. 
                            Students can be quite curious and tend to hit you with unexpected questions. 
                            To quench their hunger for certain subjects you do not only need to know your stuff but also be able to <em>condense</em> these information into portions that your students can easily understand. 
                            Going full nerd in front of the class won’t do any good. 
                        </p>
                    </div>
                    <div>
                        <p>
                            Another widely overseen aspect is <em>psychology</em>.
                             No I don’t talk about pedagogy because that stuff just sucks. 
                             Kills teachers and pupils alike. 
                             I talk about group dynamic, communication and psycho analysis. 
                             Staying in control over a class can be tough sometimes - no matter their age - trust me. 
                             Understanding how individuals interact with each other and what you can say or do to <em>motivate and encourage</em> your students is key if you want to stay on top of the situation. 
                        </p>
                        <p>
                            I never wanted to become a teacher but here I am writing sentence after sentence about successful teaching skills. 
                            As I said, this might be my own inherent skill. 
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherPage