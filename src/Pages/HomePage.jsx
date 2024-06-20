import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import classes from "./HomePage.module.css";
import { TypeAnimation } from "react-type-animation";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/Footer';

export default function HomePage() {
    const [color, setColor] = useState("yellow");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isHomeDivVisible, setIsHomeDivVisible] = useState(true);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {

        if (!sessionStorage.getItem("animation")) {
            sessionStorage.setItem("animation", 1)
        }
        else {
            sessionStorage.setItem("animation", parseInt(sessionStorage.getItem("animation")) + 1)
        }

        console.log(sessionStorage)

        const loadingScreen = document.getElementsByClassName(classes.loading_screen)[0];
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.classList.add(classes.hidden);
            }, 5210);
        }
        setTimeout(() => {
            setIsHomeDivVisible(false);
        }, 6800);
    }, [classes.loading_screen]);

    return (
        <div className={classes.home}>
            {isLoading && isHomeDivVisible && (
                <div className={classes.homeDiv}>
                    {parseInt(sessionStorage.getItem("animation")) === 1 || sessionStorage.getItem("animation") === null && <div id={classes.first_name} className={classes.loading_name}>Sabi</div>}
                    {parseInt(sessionStorage.getItem("animation")) === 1 || sessionStorage.getItem("animation") === null && <div id={classes.last_name} className={classes.loading_name}>Kahlon</div>}
                    {parseInt(sessionStorage.getItem("animation")) === 1 || sessionStorage.getItem("animation") === null && <div className={classes.loading_screen}></div>}
                </div>
            )}
            <nav className={`${isMenuOpen ? classes.open : ''}`}>
                <div className={`${classes.burger} ${isMenuOpen ? classes.open : ''}`} onClick={toggleMenu}>
                    <div className={classes.burger_Bar}></div>
                    <div className={classes.burger_Bar}></div>
                    <div className={classes.burger_Bar}></div>
                </div>

                <div className={classes.navigation}>
                    <a className={classes.signature} href="/"> &lt;Sabi Kahlon/&gt;</a>
                </div>

                <div className={`${classes.menu} ${isMenuOpen ? classes.open : ''}`}>
                    <a className={classes.signature}> &lt;Sabi Kahlon/&gt;</a>
                    <Link className={classes.home} to={"/"}>Home</Link>
                    <a className={classes.about} href='/aboutMe'>About Me</a>
                    <Link className={classes.projects} to={"/projects"}>Projects</Link>
                </div>

                <div className={classes.navigation}>
                    <a className={classes.signature} href="/"> &lt;Sabi Kahlon/&gt;</a>
                    <Link to={"/"}>Home</Link>
                    <a href='/aboutMe'>About Me</a>
                    <Link to={"/projects"}>Projects</Link>
                </div>
            </nav>
            <main className={classes.home_main}>
                <section id='landing_page'>
                    <img className={classes.home_bg} src={require("../assets/bg.jpg")} alt="" />
                    <div className={classes.landing_text} style={{ fontSize: '4rem', display: 'block', color: color }}>
                        <h1 className={classes.hi}>Hi, I'm</h1>
                        <h1>Sabi Kahlon,</h1>
                        <span>a </span>
                        <TypeAnimation
                            sequence={[
                                "programmer",
                                2000,
                                "",
                                () => setColor("orange"),
                                "developer",
                                2000,
                                "",
                                () => setColor("lightblue"),
                                "student",
                                2000,
                                "",
                                () => setColor("yellow")
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            speed={200}
                        />
                        <p className='short_info'>I'm a lifelong learner, always exploring new coding skills</p>
                    </div>
                    <div className={classes.btns}>
                        <button id={classes.work_btn} onClick={() => { window.location.href += "projects" }}>SEE MY WORK</button>
                    </div>
                    <Footer />
                </section>
            </main>
        </div>
    );
}
