import './App.css';
import profile from './assets/luffy.webp';

import { skillCategories, projects } from './data/data.ts';
import { useEffect, useState } from 'react';

let audioCtx: AudioContext | null = null;

const playClickSound = () => {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.04);

    gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);

    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.04);
  } catch (e) {
    console.error("Audio API not supported", e);
  }
};

function App() {

  const [message, setMessage] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const showToast = (message: string) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 3500);
  };


  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Lerp factor — lower = slower trailing
      const factor = 0.04;
      currentX += (mouseX - currentX) * factor;
      currentY += (mouseY - currentY) * factor;

      document.body.style.setProperty('--mouse-x', `${currentX}px`);
      document.body.style.setProperty('--mouse-y', `${currentY}px`);

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const skills = skillCategories.map((category, index) => (
    <div key={index} className={`skill-category ${category.slug}`}>
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
      {project.url && (
        <a href={project.url} className="project-link" target="_blank" rel="noopener noreferrer">
          View Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      )}
    </div>

  ))


  return (
    <>
      <header>
        <div className="header-container">
          <h1><span className='style'>//</span>AY</h1>
          <button 
            className="theme-toggle" 
            onClick={() => {
              playClickSound();
              setIsDarkMode(!isDarkMode);
            }}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </div>
      </header>
      <main>
        <div className="container inside-main">
          <section className="hero-section">
            <img className="profile" src={profile} alt="Aakash Yadav" />
            <h1>Hey, I'm <span className="name">Aakash Yadav</span>!</h1>
            <p>I'm a Full-Stack Engineer and final-year CS undergrad based in Faridabad, India 🇮🇳</p>
            <p>I believe in learning things from first principles. If you need a reliable developer who dives deep to build robust systems, I'm ready to join your team.</p>

            <div className="hero-actions">
              <a className="button primary" onClick={playClickSound} href="#projects">
                See My Work
              </a>

              <a className="button secondary" onClick={playClickSound} href="/hireMe.pdf" target="_blank" rel="noopener noreferrer">
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
              <a href="https://x.com/ezAakash" target="_blank" rel="noopener noreferrer" className="social-pill twitter">
                Twitter
              </a>

              <a href="https://github.com/ezAakash" target="_blank" rel="noopener noreferrer" className="social-pill github">
                GitHub
              </a>

              <a href="https://threads.net" onClick={(e) => {
                e.preventDefault();
                showToast("This feature is under development. Coming soon 🚧");
              }} target="_blank" rel="noopener noreferrer" className="social-pill threads">
                Threads
              </a>

              <a href="https://www.linkedin.com/in/aakashwhobuilds/" target="_blank" rel="noopener noreferrer" className="social-pill linkedin">
                LinkedIn
              </a>
            </div>
          </section>
          <section className='contact-section'>
            <h2 className="getintouch">GET IN TOUCH</h2>
            <div className="contact-box">
              <p>You can reach me anytime at</p>
              <a href="mailto:aakash.who.codes@gmail.com" className="contact-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                contact@ezAakash.com
              </a>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <p>Build with ❤️ by Aakash</p>
      </footer>
      {message && (<div className="toast">{message}</div>)}

      <div className="easter-egg" onClick={() => {
        playClickSound();
        showToast("Hey I'm Beepo! Here to hire? Trust me, he's good. Give him a chance to showcase himself!");
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect>
          <circle cx="12" cy="5" r="2"></circle>
          <path d="M12 7v4"></path>
          <line x1="8" y1="16" x2="8" y2="16"></line>
          <line x1="16" y1="16" x2="16" y2="16"></line>
        </svg>
      </div>
    </>
  )
}

export default App
