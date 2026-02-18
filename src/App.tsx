import './App.css';
import { skillCategories, projects } from './data/data.ts';
import { useEffect } from 'react';

function App() {
  
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
      {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>}
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
              <img className="profile" src="data:image/jpeg;base64,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" alt="Placeholder image"></img>
              <h1>Hey,I'm <span className="name">Aakash Yadav</span>!</h1>
              <p>I'm a Full-Stack Engineer based Faridabad, India 🇮🇳</p>
              <p>If you need a reliable developer to join your team, I'm ready to dive in.</p>
              
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  See My Work
                </a>

                <a className="button secondary" href="/resume.pdf" download>
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
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-pill linkedin">
                  LinkedIn
                </a>

                <a href="https://x.com/ezAakash" target="_blank" rel="noopener noreferrer" className="social-pill twitter">
                  Twitter
                </a>

                <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="social-pill threads">
                  Threads
                </a>

                <a href="https://github.com/ezAakash" target="_blank" rel="noopener noreferrer" className="social-pill github">
                  GitHub
                </a>

              </div>
            </section>
            <section className='contact-section'>
              <h2 className="getintouch">GET IN TOUCH</h2>
              <p>You can reach me anytime at <a href="mailto:contact@ezAakash.com">contact@ezAakash.com</a></p>
            </section>
          </div>
      </main>
      <footer>
        <p>Build with ❤️ by Aakash</p>
      </footer>
    </>
  )
}

export default App
