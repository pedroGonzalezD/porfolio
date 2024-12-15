import {useState, useEffect} from 'react'
import styles from './MiniProjects.module.scss'

const miniProjects = [
  {
    title: 'Landing Page',
    image: '/img/landingpage.png',
    links: {
      preview: 'https://polite-axolotl-1ef100.netlify.app',
      code: 'https://github.com/pedroGonzalezD/landing-page-figma',
    },
  },
  {
    title: 'Prime Numbers',
    image: '/img/Prime-numbers.png',
    links: {
      preview: 'https://silly-blini-68862d.netlify.app/',
      code: 'https://github.com/pedroGonzalezD/prime-numbers',
    },
  },
  {
    title: 'Anagram',
    image: '/img/anagram.png',
    links: {
      preview: 'https://beautiful-capybara-10a871.netlify.app/',
      code: 'https://github.com/pedroGonzalezD/Anagram',
    },
  },
  {
    title: 'Fizz-Buzz',
    image: '/img/Fizz-buzz.png',
    links: {
      preview: 'https://jazzy-gumdrop-0d59db.netlify.app/',
      code: 'https://github.com/pedroGonzalezD/fizz-buzz',
    },
  },
  {
    title: 'Fibonacci',
    image: '/img/fibonacci.png',
    links: {
      preview: 'https://vermillion-chebakia-fa8d4e.netlify.app/',
      code: 'https://github.com/pedroGonzalezD/fibonacci',
    },
  },

]

const MiniProjects = ({language, preSection}) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() =>{
    if(preSection === 'mini-projects'){
      const timeOut = setTimeout(() =>{
        setIsActive(true)

      }, 100)
      return () =>clearTimeout(timeOut)
    }
    setIsActive(false)
  }, [preSection])

  return (
    <section className={styles.section}>

    <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
      <h3>{language === 'en' ? "Mini Projects": "Mini Proyectos"}</h3>
      <ul className={styles.ul}>
      {miniProjects.map((it) =>(
        <li key={it.title}>
        <img src={it.image} alt={it.title} className={styles.img}/>
        <div className={styles.cont}>
          <h4>{it.title}</h4>
          <div>
            <div className={styles.links}>
              <a href={it.links.preview}
                target="_blank"
                rel="noopener noreferrer"
                ><img src="/img/external-link.svg" alt="external link" /></a>
              <a href={it.links.code}
                target="_blank"
                rel="noopener noreferrer"
                ><img src="/img/githubB.svg" alt="code link" /></a>
            </div>
          </div>
          </div>
        </li>
      ))}
        
      </ul>
    </div>
  </section>
  )
}

export default MiniProjects