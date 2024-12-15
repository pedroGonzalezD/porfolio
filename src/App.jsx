import {useState, useRef, useEffect} from 'react'
import styles from './App.module.scss'
import Contacts from './components/contacts/Contacts'
import Projects from './components/Projects/Projects'
import MiniProjects from './components/MiniProjects/MiniProjects'
import Skills from './components/skills/Skills'

const App = () => {
    const [language, setLanguage] = useState('en')
    const [currentSection, setCurrentSection] = useState('projects')
    const [preSection, setPreSection] = useState('projects')
    const [transition, setTransition] = useState(false)
    const [showCopiedModal, setShowCopiedModal] = useState(false)
    const email = 'pedgonza01@gmail.com'
    const mailRef = useRef(null)
    const props = {language, preSection}

    const toggleLanguage = () =>{
      setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))
    }

    const changeSection = (section) =>{
      setCurrentSection(section)
    }

    useEffect(() =>{
      const interval = setInterval(()=>{
        if(mailRef.current){
          mailRef.current.classList.add(styles.shake)
          setTimeout(()=>{
            mailRef.current.classList.remove(styles.shake)
          }, 500)
        }

      }, 10000)

      return()=> clearInterval(interval)
    }, [])

    const copy = async () =>{
      try{
        await navigator.clipboard.writeText(email)
        setShowCopiedModal(true)

        setTimeout(()=>setShowCopiedModal(false), 2000)
      } catch (error){
        console.error (error)
      }
    }

    const toggleSection = (newSection) =>{
      if (newSection === currentSection) return

      setPreSection(newSection)

      setTimeout(()=>{
        setCurrentSection(newSection)
      }, 1000)
    }

  return (
    <>
      <header className={styles.header}>
        <div className ={styles.container}>
        <h2>Pedro González</h2>
        <div className={styles.links}>
          <a href="https://github.com/pedroGonzalezD" target='_blank'rel="noopener noreferrer"><img src="/img/github.svg" alt="github" /></a>
          <a href="https://www.linkedin.com/in/pedro-gonzalez-8832a5304/" target='_blank'rel="noopener noreferrer"><img src="/img/linkedin.svg" alt="linkedin" /></a>
          <button onClick={copy}><img src="/img/mail.svg" alt="mail" ref={mailRef}/>
          <span className={styles.tooltip}>{email}</span>
          </button>
             <div className={`${styles.copiedModal} ${showCopiedModal ? styles.show : ''}`}>
            {language === 'en' ? 'Copied!' : 'Copiado!'}
            </div>
        </div>
        <button className={styles.languageToggle} onClick={toggleLanguage}>
          {language === 'en' ? 'ES' : 'EN'}
        </button>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={`${styles.cont} ${styles.flexC} ${styles.parent}`}>
            <div className={styles.imgCont}>
              <img src="/img/perfil.jpg" alt="pedro gonzález" />
            </div>
            <div className={styles.div}>
            <h1>Pedro González</h1>
            <h4>Full Stack Web Developer</h4>
            <div className={styles.about}>
              <p>
                {language === 'en' ? "I'm a web developer specializing in the MERN stack, with a focus on creating user-centered applications. My background includes both frontend and backend development, allowing me to work on projects from concept to deployment. I enjoy the process of turning ideas into digital solutions that people find useful and easy to navigate." : 'Soy un desarrollador web especializado en la pila MERN, enfocado en crear aplicaciones centradas en el usuario. Tengo experiencia en frontend y backend, lo que me permite trabajar en proyectos desde el concepto hasta el despliegue. Disfruto el proceso de convertir ideas en soluciones digitales útiles y fáciles de usar.'}
              </p>
            </div>
              <a href="" download className={styles.download}><img src="/img/download.svg" alt="download" />{language === 'en' ? 'Download CV' : 'Descargar CV'}</a>
            </div>
            </div>
        </section >
            <p className={styles.indicator}>Swipe to navigate</p>
          <div className={styles.navCont}>
          <nav className={styles.nav}>
            <button className={`${styles.navItem} ${preSection === 'projects' ? styles.active : ''}`} onClick={() => toggleSection('projects')}>
              {language === 'en' ? 'Projects' : 'Proyectos'}
            </button>
            <button className={`${styles.navItem} ${preSection === 'mini-projects' ? styles.active : ''}`} onClick={() => toggleSection('mini-projects')}>
              {language === 'en' ? 'Mini Projects' : 'Mini Proyectos'}
            </button>
            <button className={`${styles.navItem} ${preSection === 'tech-stack' ? styles.active : ''}`} onClick={() => toggleSection('tech-stack')}>
              {language === 'en' ? 'Tech Stack' : 'Tecnologías'}
            </button>
            <button className={`${styles.navItem} ${preSection === 'contacts' ? styles.active : ''}`} onClick={() => toggleSection('contacts')}>
              {language === 'en' ? 'Contact' : 'Contactos'}
            </button>

          </nav>
          </div>

            <div className={styles.sectionCont}>
            {currentSection === 'projects' && <Projects {...props}/>}
            {currentSection === 'mini-projects' && <MiniProjects {...props}/>}
            {currentSection === 'tech-stack' && <Skills {...props}/>}
            {currentSection === 'contacts' && <Contacts {...props}/>}
          </div>
          
      </main>
      <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Pedro González,{language === 'en' ? ' All rights reserved.' : ' Todos los derechos reservados.'}</p>
      </footer>
    </>
  )
}

export default App