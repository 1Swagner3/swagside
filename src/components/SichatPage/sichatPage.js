import React from "react";
import './sichatPage.css'

import Skillcard from "../Skillcard/skillCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphonesSimple, faMusic, faImage, faVideo, faListCheck, faRectangleAd, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faSpotify, faYoutube, faItunes, faDeezer } from "@fortawesome/free-brands-svg-icons";
const SicHatPage = () => {
    return (
        <>
            <div className="header"></div>
            <div className="section1">
                <div className="sh-para">
                    <h3>The Beginning</h3>
                    <p>Starting in 2019 SicHat started of as a side project of mine. I had a lot of band stuff going on and used to tour as a <a href="/musician/drummer" style={{textDecoration: 'underline'}}>drummer</a> for several bands. 
                        My main focus was on a new band idea that I wanted to realize. 
                        While writing songs for this band I stumbled over some ideas that didn’t fit the style of the band but sounded very appealing to me. 
                        So i decided to release those songs under my own little project: <em>SicHat</em>.</p>
                    <p>While the band that I was trying to build crumbled more and more in it’s starting phase I found myself enjoying SicHat songs quite a lot. 
                        It was a place without compromise where I could form <em>my very own idea of music</em>.</p>
                </div>
                <div className="video">
                    <iframe width="400px" height="250" src="https://www.youtube.com/embed/yWe9xNYyYNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="music-link-row">
                <a href="https://open.spotify.com/artist/2pNriAxaGNyGHTZqTU51Oo?si=yB_v1-dvS9ewjTwzF48rWQ"><FontAwesomeIcon icon={faSpotify} size="3x"/></a>
                <a href="https://www.youtube.com/channel/UCByFi5AaQ7lL8WHU1H2IQXg"><FontAwesomeIcon icon={faYoutube} size="3x"/></a>
                <a href="https://music.apple.com/de/artist/sichat/1493955113?l=en"><FontAwesomeIcon icon={faItunes} size="3x"/></a>
                <a href="https://deezer.page.link/iyRn9WJnzF58zGQ26"><FontAwesomeIcon icon={faDeezer} size="3x"/></a>
            </div>
            <div className="section2">
                <div className="sec2--container">
                    <div className="sec2--container-box1">
                        <h3>Autotune</h3>
                        <p>
                            Another thing people talk a lot about when they talk about SicHat is <em>autotune</em>. 
                            I am not only using autotune sometimes very excessively but I also don’t make an effort hiding it. 
                            While in the beginning it was a great way to make my untrained voice work with the music it became more and more a stylistic choice. 
                            There are two main reasons for this. 
                        </p>
                        <p>
                            The first … I like <em>cyber stuff</em>. 
                            The idea of a post apocalyptic cybernetic future is just captivating. 
                            The scenery and aesthetics working well with the new futuristic but still rough sound of my music. 
                            I even bought a <em>cyber arm</em> that I used to wear in a lot of my <a href="https://www.youtube.com/channel/UCByFi5AaQ7lL8WHU1H2IQXg" style={{textDecoration: 'underline'}}>music videos</a>. 
                            And so a robotic voice is just perfect for this kind of art. SicHat - <em>half human, half machine</em>. 
                            So the question if autotune can be authentic leans a lot into the debate of robots feeling real emotions. 
                        </p>
                    </div>
                    <div>
                        <p>
                            The <em>second reason</em> is that I don’t think, that people actually dislike autotune as much as they tend to tell us. 
                            This technology takes away the exclusivity of being able to sing in order to make a song. 
                            Some people may feel a little cheated thinking there lays no effort in the song or the performance. 
                            Others may just reject the new thing … nothing to surprising here. 
                            But maybe there is also some bitterness in their reaction - <em>„well then I could to it too“  - „but why don’t you then?“</em>.  
                        </p>
                        <p>
                            In the end autotune is just something people need to get used to and give it a proper chance. 
                            Distorted guitars were a horrible thing back in the day… and so were electronic drums. 
                            Beyond all that fuss lies simply a <em>new world of musical styles</em> that we get to explore. 
                            And I eagerly stand on the front of this expedition.
                        </p>
                    </div> 
                </div>
            </div>
            <div className="section3">
                <div className="sec3--comtent">
                    <img src="/pictures/KingdomHeartsErstentwurf.png" />
                    <div className="sh-para2">
                        <h3>My Ambition</h3>
                        <p>Every starting artist out there knows the struggle of having <em>big visions but small resources</em>. 
                            I thought myself in graphic design to make my own cover art. 
                            I thought myself in video editing to make trailer for social media. 
                            Last year I spent 6 months indulging into books about audio engineering to improve the overall sound of my music. 
                            I wanted to be able to create songs on my own computer that are commercially competitive.
                        </p>
                        <p>
                            My Ambition is clear and my logo reminds me of the promise I gave myself years ago:  
                            <em>„become better everyday - one step at a time“</em>
                        </p>
                    </div>
                </div>
            </div>
            <div className="section4">
                <h3>Here are some of the skills i picked up along the way</h3>
                <div className="skillrow">
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faHeadphonesSimple} size="1x"/>}
                        text='Mixing'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faMusic} size="1x"/>}
                        text='Mastering'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faImage} size="1x"/>}
                        text='Graphicdesign'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faVideo} size="1x"/>}
                        text='Videoediting'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faListCheck} size="1x"/>}
                        text='Management'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faRectangleAd} size="1x"/>}
                        text='Advertisment'
                    />
                    <Skillcard
                        pic={<FontAwesomeIcon icon={faHashtag} size="1x"/>}
                        text='Social Media'
                    />
                </div>
            </div>

        </>
    )
}

export default SicHatPage