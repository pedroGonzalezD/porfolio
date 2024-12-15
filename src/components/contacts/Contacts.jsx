import { useState, useEffect} from 'react'
import emailjs from 'emailjs-com'
import styles from './Contacts.module.scss'

const Contacts = ({ language, preSection }) => {
  const [isActive, setIsActive] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  useEffect(() =>{
    if(preSection === 'contacts'){
      const timeOut = setTimeout(() =>{
        setIsActive(true)
        
      }, 100)
      return () =>clearTimeout(timeOut)
    }
    setIsActive(false)
  }, [preSection])

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send('service_jn35h7m', 'template_t9sseom', templateParams, 'POD3JN5FHqwe7Gawy').then((res) =>{
      console.log(res)
    })
    .catch((err) =>{
      console.error(Err)
    })

    setFormData({ name: '', email: '', message: '' });
  }


  return (
    <section className={styles.section}>

    <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
      <h3>{language === 'en' ? 'Contacts' : 'Contacto'}</h3>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label >
          {language === 'en' ? 'Name' : 'Nombre'}
          <input type="text" name='name' value={formData.name}
            onChange={handleChange}
            required
            />
        </label>

        <label >
        {language === 'en' ? 'Email' : 'Correo'}
          <input type="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            />
        </label>

        <label >
        {language === 'en' ? 'Message' : 'Mensaje'}
          <textarea name="message" value={formData.message}
            onChange={handleChange} 
            required
            >

          </textarea>
        </label>

        <button type='submit'>{language === 'en' ? 'Send Message' : 'Enviar Mensaje'}</button>
        
      </form>
    </div>
  </section>
  )
}

export default Contacts