import React from "react";
import './developerPage.css'

import Skillcard from "../Skillcard/skillCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faC, faDatabase, faServer} from "@fortawesome/free-solid-svg-icons";
import { faPhp, faPython, faHtml5, faCss3, faJs, faReact, faShopware, faNodeJs } from "@fortawesome/free-brands-svg-icons";

const DeveloperPage = () => {
    return (
        <>
            <div className="developer-container">
                <div className="dev-content">
                    <h3>Turning the worst tide around</h3>
                    <p>Coding is the youngest addition to my skill palette. And as so often, bad things had to happen first.</p>
                    <p>
                        When the pandemic hit Germany in 2020 with full force,  I faced a horrible side of all the prevention measures. 
                        Music and culture were deemed dispensable and as such I had to stop working for over 8 months in total over the last 2 years. 
                        Working as a self-employed musician, <em>no work means no money</em>. My savings were shrinking. Pushed into a corner I had to find something new. 
                        Something I could rely on, even in such bad times.
                    </p>
                    <p>
                        Working temporally in just whatever job was no option for me. 
                        I wanted and <em>needed</em> something I could put my abilities into and see myself grow in the next years. 
                        In the end I found exactly this in coding. A profession that suited not only my skillset but also tickled my <em>creative itch</em>. 
                        Being able to envision and to create. Constantly challenged to improve myself. Coding gave me this opportunities.
                    </p>
                    <p>
                        The first step was the  
                         <a href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x?g_acctid=724-505-4034&g_campaign=gs-b2c-nonbrand-tier1geo-partner-harvard-core&g_campaignid=15417765031&g_adgroupid=131210224478&g_adid=588991333656&g_keyword=computer%20science%2050&g_keywordid=kwd-338945058710&g_network=g&utm_source=google&utm_campaign=gs-b2c-nonbrand-tier1geo-partner-harvard-core&utm_medium=cpc&utm_term=computer%20science%2050&hsa_acc=7245054034&hsa_cam=15417765031&hsa_grp=131210224478&hsa_ad=588991333656&hsa_src=g&hsa_tgt=kwd-338945058710&hsa_kw=computer%20science%2050&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw3v6SBhCsARIsACyrRAn0H89pXZUony0HMqGhN_G-UGyGspbWTj-NyEUcl4ZgFuWloZiEn4AaAoe_EALw_wcB" style={{textDecoration:"underline"}}>CS50</a> course at Harvard University. 
                        Modern technology made it possible to participate from all around the world. 
                        After the first few lessons I knew I definitely found a new passion for me and another outlet for my creative energies. 
                        Learning to code from the start can be a troublesome experience but thanks to my years long expertise as a <a href="/teacher" style={{textDecoration:"underline"}}>teacher</a> I was more than able to manage the sheer amount of new information. 
                        <em>A teacher who teaches himself - quite a funny sight</em>. 
                    </p>
                </div>
                <div className="section4">
                    <h3>Here is a list of my current coding languages and frameworks</h3>
                    <div className="skillrow">
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faJs} size="1x"/>}
                        text='Javascript'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faReact} size="1x"/>}
                        text='React'
                    />
                      <Skillcard
                        pic={<FontAwesomeIcon icon={faNodeJs} size="1x"/>}
                        text='NodeJs'
                    />
                     <Skillcard
                        pic={<FontAwesomeIcon icon={faServer} size="1x"/>}
                        text='ExpressJs'
                    />
                     <Skillcard
                        pic={<FontAwesomeIcon icon={faDatabase} size="1x"/>}
                        text='SQL'
                    />
                     <Skillcard
                        pic={<FontAwesomeIcon icon={faHtml5} size="1x"/>}
                        text='HTML'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faCss3} size="1x"/>}
                        text='CSS'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faC} size="1x"/>}
                        text='C'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faPhp} size="1x"/>}
                        text='PHP'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faPython} size="1x"/>}
                        text='Python'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faShopware} size="1x"/>}
                        text='Shopware 6'
                    />
                    </div>
                </div>
            </div>
            <div className="certificates">
                    <img src="/pictures/JS.png" alt=""/>
                    <img src="/pictures/PHP.png" alt=""/>
                    <img src="/pictures/FullStack.png" alt=""/>
                    <img src="/pictures/CS50x.png" alt=""/>
                </div>
            <div className="dev-sec1">
                <div>
                    <h3>First steps</h3>
                    <p>
                        After the CS50 certificate I knew what my next step had to be: <em>real life experience</em>. 
                        Just hitting one course after another wouldn’t teach me what I had to know if I wanted to succeed in this field. At the end of 2021 I landed a little job as web-developer. 
                        Sadly the company was facing some troubles and so my first job didn’t last long.
                    </p>
                </div>
                <img src="/pictures/DevPic1.jpg" alt=""/>
            </div>
            <div className="dev-sec2">
                <img src="/pictures/DevPic2.jpg" alt=""/>
                <div>
                    <h3>Full Stack</h3>
                    <p>
                        But the insight I got told me that I had to go back to the drawing board. 
                        For the next 5 months I ploughed myself through a <em>Full-Stack Developer</em> course. 
                        Gaining more knowledge about the requirements and obstacles that my future profession would bring along with it.  
                        Learning every morning before going to work and coding little projects on the weekends - that’s all I did during that time.
                    </p>
                    <p>
                        Now after receiving my certificate as a Full-Stack Developer I am, once again, ready to hit the road.
                        And i am very excited to see where all of this is going.
                    </p>
                </div>
            </div>
        </>
    )
}

export default DeveloperPage