import './App.css';
import profile from './assets/luffy.webp';

import { skillCategories, projects } from './data/data.ts';
import { useEffect, useState } from 'react';

function App() {
  
  const [message, setMessage] = useState("")

  const showToast = (message: string) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 2500);
  };


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = skillCategories.map((category, index) => (
    <div key = {index} className={`skill-category ${category.slug}`}>
      <h3>{category.title}</h3>
      <div className="skills-list">
        {category.skills.map((skill, skillIndex) => (
          <span key={skillIndex} className="skill">{skill}</span>
        ))}
      </div>      
    </div>
  ))

  const projectList = projects.map((project, index) => (
    <div key={index} className="project">
      <div className="project-header">
          <h3>{project.name}</h3>
          <p className={`status-badge ${project.status.toLowerCase()}`}>{project.status}</p>
      </div>
      <p>{project.description}</p>
      {project.url && <a href={project.url} onClick={(e) => {
        e.preventDefault();
        showToast("This feature is under development. Coming soon 🚧");
      }} target="_blank" rel="noopener noreferrer">View Project</a>}
      </div>
    
  ))


  return (
    <>
      <header>
          <h1><span className='style'>//</span>AY</h1>
      </header>
        <main>
          <div className="container inside-main">
            <section className="hero-section">
              <img className="profile" src={profile} alt="Aakash Yadav" />
              <h1>Hey,I'm <span className="name">Aakash Yadav</span>!</h1>
              <p>I'm a Final year CS undergrad and Full-Stack Engineer based Faridabad, India 🇮🇳</p>
              <p>If you need a reliable developer to join your team, I'm ready to dive in.</p>
              
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  See My Work
                </a>

                <a className="button secondary" onClick={(e) => {
                  e.preventDefault();
                  showToast("This feature is under development. Coming soon 🚧");
                }} href="#">
                  Download Resume
                </a>
              </div>

              <p className="status">
                <span className="status-dot"></span>
                Available for hire, let's talk!
              </p>

            </section>

            <section className="skills-section">
              <h2>SKILLS</h2>
              <div className="skill-categories">
                {skills}
              </div>
            </section>

            <section id="projects" className="projects-section">
              <h2>PROJECTS</h2>
              <div className="project-list">
                {projectList}
              </div>
            </section>

            <section className="findme-section">
              <h2 className="section-label">FIND ME ON</h2>
              <p className="findme-subtext">
                You can find me on the following platforms:
              </p>

              <div className="social-links">
                <a href="https://linkedin.com" onClick={(e) => {
                  e.preventDefault();
                  showToast("This feature is under development. Coming soon 🚧");
                  }} target="_blank" rel="noopener noreferrer" className="social-pill linkedin">
                  LinkedIn
                </a>

                <a href="https://x.com/ezAakash" target="_blank" rel="noopener noreferrer" className="social-pill twitter">
                  Twitter
                </a>

                <a href="https://threads.net" onClick={(e) => {
                  e.preventDefault();
                  showToast("This feature is under development. Coming soon 🚧");
                  }} target="_blank" rel="noopener noreferrer" className="social-pill threads">
                  Threads
                </a>

                <a href="https://github.com/ezAakash" target="_blank" rel="noopener noreferrer" className="social-pill github">
                  GitHub
                </a>

              </div>
            </section>
            <section className='contact-section'>
              <h2 className="getintouch">GET IN TOUCH</h2>
              <p>You can reach me anytime at <a href="mailto:yaakash519@gmail.com">contact@ezAakash.com</a></p>
            </section>
          </div>
      </main>
      <footer>
        <p>Build with ❤️ by Aakash</p>
      </footer>
      {message && (<div className="toast">{message}</div>)}
    </>
  )
}

export default App
