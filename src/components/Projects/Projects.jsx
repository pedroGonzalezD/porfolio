import {useState, useEffect} from 'react'
import styles from './Projects.module.scss'

const projects =[
  {
    title: 'Connect4 Online',
    description: `Connect4 Online is a personal project designed for online multiplayer functionality. Players can connect, authenticate, and compete in real-time matches.\n
    The platform includes user authentication, matchmaking, and a real-time chat feature during gameplay.\n
    The game logic is implemented to handle various edge cases, ensuring a seamless experience.\n
    To test the application, you can register a new account or use the guest login feature.`,
    descripción: `Connect4 Online es un proyecto personal diseñado para la funcionalidad multijugador en línea.\n
Los jugadores pueden conectarse, autenticarse y competir en partidas en tiempo real.\n
La plataforma incluye autenticación de usuarios, emparejamiento y una función de chat en tiempo real durante las partidas.\n
La lógica del juego está implementada para manejar varios casos límite, asegurando una experiencia fluida.\n
Para probar la aplicación, puedes registrar una nueva cuenta o utilizar la función de inicio de sesión como invitado.`,
    tech: ['React', 'Node.js', 'MongoDB', 'ExpressJs', 'Socket.IO'],
    image: 'img/connect4.png',
    links: {
      code: 'https://github.com/pedroGonzalezD/Connec4-online',
      preview: 'https://reliable-marigold-ee493d.netlify.app/'
    }
},
  {
    title: 'Eventix',
    description: `Eventix is a personal project focused on functionality. Users can submit events, which the administrator reviews and approves before they appear on the main page.\n
    The platform includes role-based authentication and integrates with PayPal (sandbox) for payments.\n
    Each purchase generates a unique ticket ID linked to the event and the user's account.\n
    To test the application, use the admin credentials:\n
    Email: admin@gmail.com\n
    Password: admin1234`,
    descripción: `Eventix es un proyecto personal enfocado en la funcionalidad.\n
Los usuarios pueden enviar eventos, los cuales el administrador revisa y aprueba antes de que aparezcan en la página principal.\n
La plataforma incluye autenticación basada en roles e integración con PayPal (sandbox) para los pagos.\n
Cada compra genera un ID único de ticket vinculado al evento y a la cuenta del usuario.\n
Para probar la aplicación, utiliza las credenciales de administrador:\n
Correo electrónico: admin@gmail.com\n
Contraseña: admin1234`,
    tech: ['React', 'Node.js', 'MongoDB', 'ExpressJs'],
    image: 'img/eventix.png',
    links : {
      code: 'https://github.com/pedroGonzalezD/Eventix',
      preview: "https://teal-donut-a17380.netlify.app/"
    }
  },
  {
    title: 'Task-Tide',
    description:  `This project is a simple registration and authentication system, with a basic TODO feature added to give it more functionality.\n
    Errors are logged in the console only, as this is a test project without full UI integration for error handling.\n
    Feel free to register and try it out.`,
    descripción: `Este proyecto es un sistema simple de registro y autenticación, con una funcionalidad básica de tareas (TODO) añadida para darle más utilidad.\n
    Los errores se registran únicamente en la consola, ya que este es un proyecto de prueba sin una integración completa de la interfaz para el manejo de errores.\n
    Siéntete libre de registrarte y probarlo.`,
    tech: ['React', 'NodeJs', 'MongoDB', 'ExpressJs'],
    image: '/img/Task-Tide.png',
    links : {
      code: 'https://github.com/pedroGonzalezD/ToDo',
      preview: "https://tasktidepg.netlify.app/login"
    }
  },

]

const Projects = ({language, preSection}) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() =>{
    if(preSection === 'projects'){
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
      <h3>{language === 'en' ? 'My Projects' : 'Mis Proyectos'}</h3>

      <ul className={styles.ul}>
        {projects.map((it) =>(
          <li key={it.title}>
            <img src={it.image} alt={it.title} className={styles.img}/>
            <div className={styles.cont}>
              <h4>{it.title}</h4>
              <p className={styles.description}>{language === 'en' ? it.description : it.descripción}</p>
              <div>
                <div className={styles.tech}>
                  {it.tech.map((t) =>(
                    <span key={t}>{t}</span>
                  ))}
                </div>
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

export default Projects