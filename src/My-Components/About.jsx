import React from 'react'
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-container">
      <div className="about-image">
        <img src="images/saqlain.jpg" alt="Muhammad Saqlain Shoukat" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm <span className="highlight">Muhammad Saqlain Shoukat</span>, a passionate Web Developer and Red Team Security enthusiast. 
          I have hands-on experience in web technologies and cybersecurity. My journey is fueled by curiosity and a drive to build innovative projects.
        </p>
        <p>
          I am currently working on projects related to web development and ethical hacking. 
          My goal is to contribute my skills to make the digital world more secure and advanced.
        </p>
        <div className="about-links">
          <a href="https://www.youtube.com/@CodingChatRoom" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.youtube.com/playlist?list=PL-Y4YkNs_EJHZxzuxzhishpc6XygJf4Um" target="_blank" rel="noopener noreferrer">Courses</a>
        </div>
      </div>
    </section>
  )
}

export default About
