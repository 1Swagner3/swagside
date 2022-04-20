import React from "react";
import './iconBox.css'

const IconBox = ({pic, text}) => {
    return (
        <div className="iconbox">
            <div className="pic">{pic}</div>
            <div className="textbox">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default IconBox