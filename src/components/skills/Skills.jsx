import {useState, useEffect} from 'react'
import styles from './Skills.module.scss'

const Skills = ({language, preSection}) => {
  const [isActive, setIsActive] = useState(false)

  const frontEndSkills = [
    { name: 'JavaScript', icon: '/icons/javascript.svg'},
    { name: 'React', icon: '/icons/react.svg'},
    { name: 'HTML5', icon: '/icons/html.svg'},
    { name: 'Sass', icon: '/icons/sass.svg'},
  ];

  const backEndSkills = [
    { name: 'NodeJs', icon: '/icons/nodeJs.svg'},
    { name: 'MongoDB', icon: '/icons/mongoDB.svg'},
    { name: 'Express Js', icon: '/icons/express.svg'}
  ]

  const tools = [
    { name: 'Git', icon: '/icons/git.svg'},
    { name: 'Insomnia', icon: '/icons/Insomnia.svg'},
    { name: 'Vite', icon: '/icons/vite.svg'},
    { name: 'VS CODE', icon: '/icons/vsCode.svg'}
  ]

  useEffect(() =>{
    if(preSection === 'tech-stack'){
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
      <h3>{language === 'en' ? 'Tech-stack' : 'Tecnologías'}</h3>

        <div className={styles.cont}>
            <h5 className={styles.h5}>Front-End</h5>
          <ul className={styles.grid}>
            {frontEndSkills.map((f) =>(
              <li key={f.name}>
                <img src={f.icon} alt={f.name} />
                <p>{f.name}</p>
              </li>
            ))}
          </ul>

            <h5 className={styles.h5}>Back-End</h5>
          <ul className={styles.grid}>
            {backEndSkills.map((b) =>(
              <li key={b.name}>
                <img src={b.icon} alt={b.name} />
                <p>{b.name}</p>
              </li>
            ))}
          </ul>

            <h5 className={styles.h5}>{language === 'en' ? 'Tools' : 'Herramientas'}</h5>
          <ul className={styles.grid}>
            {tools.map((t) =>(
              <li key={t.name}>
                <img src={t.icon} alt={t.name} />
                <p>{t.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills