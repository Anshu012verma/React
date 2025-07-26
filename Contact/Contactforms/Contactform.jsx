import React from 'react'
import Button from '../Button/Button';
import styles from "./ContactForm.module.css";
import contactimg from "./contactimg.svg";

const Contactform = () => {
  console.log(styles)
  return (
    <section className={styles.form}>
      <div className="container">
        <div className={styles.top_btn}>
          <Button icon={<i className="bi bi-chat-left-text"></i>} text="VIA SUPPORT CHAT" />
          <Button icon={<i className="bi bi-telephone-fill"></i>} text="VIA CALL" />
        </div>
      
        <Button icon={<i className="bi bi-chat-left-text"></i>} text="VIA EMAIL FORM" isOutline={true} />

        <form>
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name='email' />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text">Text</label>
            <textarea name='text' />
          </div>
        </form>
        <div style={{
          display:"flex",
          justifyContent:"end",
        }}>
          <Button text="SUBMIT" />
        </div>
      </div>

      <div className={styles.form_img}>
        <img src={contactimg} alt="contact Image" />
      </div>

    </section>

  )
}

export default Contactform
