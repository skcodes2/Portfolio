import React, { useEffect } from 'react'
import Project from '../components/Project'
import styles from "./ProjectPage.module.css"
import Footer from "../components/Footer.jsx"

export default function ProjectPage() {
    useEffect(() => {
        console.log(styles)
    }, [])
    return (

        <div>
            <div className={styles.project_page_container}>

                <header>
                    <img src={require("../assets/down_arrow.png")} alt="" className={styles.down_arrow} />
                    <h1>Projects</h1>
                    <a className={styles.signature} href="/"> &lt;Sabi Kahlon/&gt;</a>
                </header>
                <div className={styles.info_container}>
                    <div className={styles.time_frame}>
                        <h3>TIMEFRAME</h3>
                        <p>YEAR 2023-2024</p>
                    </div>
                    <div className={styles.disi}>
                        <h3>DISCIPLINE</h3>
                        <p>Code Development</p>
                        <p>Software Design</p>
                        <p>Requirement Engineering</p>
                        <p>Testing</p>
                    </div>
                    <div className={styles.tools}>
                        <h3>TOOLS</h3>
                        <p>Vscode</p>
                        <p>Jira</p>
                        <p>Confluence</p>
                        <p>GitHub</p>
                    </div>
                </div>

                <div className={styles.projects}>
                    <Project
                        imageUrl1={"react.png"}
                        imageUrl2={"nodejs.png"}
                        title={"O.L.L.I, Website Development"}
                        details={'Me and a group of friends built a website for a non-profit charity using React for the front-end, Express for the back-end, and MySQL for the database. We deployed the site on Google Cloud Platform (GCP) to ensure it runs smoothly and securely. This project helps the charity connect with their community more effectively.'}
                        hover_image={"olli_img.png"}
                        gitLink={"https://github.com/skcodes2/olli.git"}
                    />
                    <Project
                        imageUrl1={"python.png"}
                        imageUrl2={"pygame.png"}
                        title={"Town of Engineria, Game "}
                        details={`Storyline:
                        In the town of Enginerea, where people are destined to become master builders, there lived a man named Bobby the Builder. From an early age, Bobby had a passion for building and designing. He spent countless years perfecting his craft and becoming the Supreme Builder of the town. One day, a terrible earthquake struck Enginerea resulting in severe damage to many of the town buildings including the Town hall. It is the job of the Supreme Builder to rebuild the town hall to its former glory. However, in his endeavor to rebuild the town hall, he must face-off against countless other master builders who want to take the title of the Supreme Builder.`}
                        hover_image={"engineria.png"}
                        gitLink={"https://github.com/skcodes2/Town-of-Engineria.git"}
                    />
                    <Project
                        imageUrl1={"react.png"}
                        imageUrl2={"mysql.png"}
                        title={"Natural Disasters, Competition"}
                        details={'I participated in a programming competition where the challenge was to create a system to help emergency services track natural disasters. The task involved developing a program with a graphical user interface (GUI) to locate, track, and add cases of natural disasters. Each disaster needed attributes like a name (e.g., "Hurricane Dave"), location (latitude and longitude), start date, and intensity (on a scale of 1-10). Out of 21 participants, I secured 4th place.'}
                        hover_image={"disasters.png"}
                        gitLink={"https://github.com/skcodes2/competition-2023.git"}
                    />
                    <Project
                        imageUrl1={"java.png"}
                        imageUrl2={"builder.png"}
                        title={"Algorithm Graph, Project "}
                        details={'Using JavaFX libraries, I developed a program to simulate and compare the efficiency of two sorting algorithms: "Merge Sort" and one of either "Selection Sort," "Insertion Sort," or "Quick Sort." The program starts by generating an unsorted array of distinct integers ranging from 1 to the array size, which is controlled by a Slider with values between 32 and 128. This simulation provides a visual and interactive way to understand the performance differences between the selected sorting algorithms.'}
                        video={"algo.mp4"}
                        gitLink={"https://github.com/skcodes2/Sorting-Graph.git"}
                    />
                    <Project
                        imageUrl1={"python.png"}
                        imageUrl2={"c++.png"}
                        title={"Chat Room, Project"}
                        details={"Me and a group of friends developed a chatting application using Python and C++ and deployed it on AWS. The application allows users to create their own chat rooms and join existing ones, providing a seamless and interactive chat experience."}
                        hover_image={"nodejs.png"}
                        gitLink={"https://github.com/skcodes2/ChatRoom.git"}
                    />
                    <Project
                        imageUrl1={"mysql.png"}
                        imageUrl2={"react.png"}
                        title={"PC Builder, Project"}
                        details={"I developed PCBuilderPro, a comprehensive online resource dedicated to enhancing the personal computing experience. PCBuilderPro allows users to create accounts, log in, select different PC parts, and create favorites lists. Users can share their favorites lists with others and like other users' posts. Additionally, PCBuilderPro features an online forum where users can post, view, and comment on PC builds, as well as seek advice and guidance from peers. This platform aims to educate, guide, and empower individuals in all aspects of PC building and computing."}
                        hover_image={"pcbuilder.png"}
                        gitLink={"https://github.com/skcodes2/PCBuilderPro.git"}
                    />
                    <Project
                        imageUrl1={"css.png"}
                        imageUrl2={"react.png"}
                        title={"Pet Picker, Project"}
                        details={"I developed a GUI-based system that recommends pets to users based on their responses to a survey. The survey collects information about the user's lifestyle, living conditions, and care capabilities. Based on the responses, the system provides personalized pet recommendations, helping users find the best pet match for their specific circumstances."}
                        hover_image={"yang.png"}
                        gitLink={"https://github.com/skcodes2/Pet-Survey.git"}
                    />

                    <Project
                        imageUrl1={"html-5.png"}
                        imageUrl2={"css.png"}
                        title={"Avatar, First Project"}
                        details={"My first-ever project was creating a website dedicated to the show Avatar:The Last Airbender. I used basic HTML and CSS to build the site. This project was a valuable learning experience, helping me understand the fundamentals of web development and design."}
                        hover_image={"avatar.png"}
                        gitLink={"https://github.com/skcodes2/avatar-first-project.git"}
                    />

                    <Project
                        imageUrl1={"nodejs.png"}
                        title={"Image Viewer, Project"}
                        details={"I built a simple JavaScript-based client-server remote image viewer. In this project, the server provides an image for clients to download, which is then displayed using the default image viewer supported by the client's operating system. "}
                        hover_image={"viewer.png"}
                        gitLink={"https://github.com/skcodes2/image-viewer.git"}
                    />
                </div>

                <div id={styles.proj_footer}>
                    <Footer />
                </div>

            </div>
        </div>
    )
}
