import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 66) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
    }
    
    useEffect(() => {
            changeBackground()
            // adding the event when scroll change background
            window.addEventListener("scroll", changeBackground)
        })

    return (
        <>
        <div className={navbar ? "nav--container-scroll" : "nav--container"}>
            <ul className="nav--list">
                <Link to="/" style={{textDecoration: 'none', color: 'white'}}><li>Home</li></Link>
                <Link to="/musician" style={{textDecoration: 'none', color: 'white'}}><li>Musician</li></Link>
                <Link to="/developer" style={{textDecoration: 'none', color: 'white'}}><li>Developer</li></Link>
                <Link to="/teacher" style={{textDecoration: 'none', color: 'white'}}><li>Teacher</li></Link>
            </ul>
        </div>
        </>
    )
}

export default Navbar