import React from 'react'

export default function Footer() {
    return (
        <footer>

            <article>
                <a href="https://github.com/skcodes2" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/sabi-kahlon-b98940304/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:sabikahlon5@gmail.com" target="_top">
                    <i className="fas fa-envelope"></i>
                </a>
            </article>

            <div className="footer_links" >
                <a className={"links"} href="/" >Home</a>
                <a className={"links"} href="/aboutMe">About Me</a>
                <a className={"links"} href="/projects">Projects</a>
            </div>

            <p>20</p>
            <p>24</p>
        </footer>
    )
}
