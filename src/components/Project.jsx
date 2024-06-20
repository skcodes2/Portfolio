import React, { useState } from 'react'
import pro from "./Project.module.css"

export default function Project({ imageUrl1, imageUrl2, title, details, hover_image, video, gitLink }) {

    const [arrowDown, setArrowDown] = useState(false)


    function rotateArrow(e) {
        const arrow = e.target
        arrow.classList.toggle(pro["rotate"])
        setArrowDown(!arrowDown)
    }


    return (
        <div className={pro.outer}>
            <div className={pro.proj_container} data-aos="fade-up">

                <img src={require("../assets/" + imageUrl1)} alt="" className={pro.tools} />

                {imageUrl2 &&
                    <img src={require("../assets/" + imageUrl2)} alt="" className={pro.tools} />}

                <div className={pro.text_container}>
                    <p className={pro.title}>{title}</p>
                </div>
                <div className={pro.hover_image}>
                    {hover_image && <img src={require("../assets/" + hover_image)} alt="" />}
                    {video && <video width="100%" height="100%" autoPlay loop muted>
                        <source src={require('../assets/' + video)} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>}
                </div>

                <a href={gitLink} className={pro.github} rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>

                <img src={require("../assets/arrow.png")} alt="" className={pro.arrow} onClick={e => rotateArrow(e)} />



            </div>
            {arrowDown && <div className={pro.details}>
                <p>{details}</p>
            </div>}
        </div>
    )
}
