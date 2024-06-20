import React from 'react'
import styles from "./About.module.css"
import Footer from '../components/Footer'

export default function AboutMe() {


    return (
        <div className={styles.about_main}>


            <section className={styles.aboutMe_container}>

                <header className={styles.header_container}>
                    <h1>ABOUT <span style={{ color: '#F9D423' }}>ME</span></h1>
                    <p className={styles.header_para}>I love diving into the details of software development, ensuring that every application I work on is not only functional but also intuitive and enjoyable to use. </p>
                    <div className={styles.header_rec}></div>
                </header>

                <div className={styles.content_container}>

                    <div className={styles.img_frame}><img src={require("../assets/about-img.jpg")} alt="" className={styles.self} /></div>

                    <div className={styles.about_container}>
                        <h2 >I'm Sabi Kahlon</h2>
                        <h3>a fourth-year Software Engineering student</h3>
                        <p>
                            Passionate about coding with a particular interest in UX/UI design.
                            My experience includes developing responsive web applications, utilizing various programming languages,
                            and collaborating on team projects.
                        </p>

                        <div className={styles.contact_info}>
                            <div className={styles.labels}>
                                <h3 className={styles.label}>Email</h3>
                                <h3 className={styles.label}>Address</h3>
                                <h3 className={styles.label}>Phone Number</h3>
                            </div>
                            <div className={styles.values}>
                                <h3 className={styles.value}>:sabikahlon7345@gmail.com</h3>
                                <h3 className={styles.value}>:Edmonton, Alberta</h3>
                                <h3 className={styles.value}>:825-925-5437</h3>
                            </div>
                        </div>

                    </div>



                </div>

                <a href={require("../assets/resume.pdf")} download={"Sabi Kahlon.pdf"}>
                    <button className={styles.cv} >Download CV</button>
                </a>

            </section>


            <section className={styles.skills} id='skills'>
                <h1>My <span style={{ color: "#F9D423" }}> Skills</span></h1>
                <div className={styles.skills_container}>
                    <img src={require("../assets/html-5.png")} alt="" className="languages" />
                    <img src={require("../assets/css.png")} alt="" className="languages" />
                    <img src={require("../assets/js.png")} alt="" className="languages" />
                    <img src={require("../assets/python.png")} alt="" className="languages" />
                    <img src={require("../assets/react.png")} alt="" className="languages" />
                    <img src={require("../assets/java.png")} alt="" className="languages" />
                    <img src={require("../assets/mysql.png")} alt="" className="languages" />
                    <img src={require("../assets/aws.png")} alt="" className="languages" />
                    <img src={require("../assets/nodejs.png")} alt="" className="languages" />
                </div>
                <button style={{ display: "none" }}>Show More</button>
            </section>


            <Footer />


        </div>
    )
}
