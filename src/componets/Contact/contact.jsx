import React from "react";

import styles from "./contact.module.css";

import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title} id="contact">Get in touch!</h1>
        <div className={styles.img}>
        <img className={styles.contactImg} src={getImageUrl("skills/contact.png")} width={"350px"} alt="Contact image" />
        </div>
        <div className={styles.form}>
        <label For="name">Whats's your name?</label>
        <input type="text" name="name" id="name" />
        <label For="email">Your best e-mail:</label>
        <input type="email" name="email" id="email" />
        <label For="message">Let's talk!</label>
        <textarea name="message" id="message" cols="30" rows="6"></textarea>
        <button type="submit" class="submit-button">Done!</button>
        </div>
       
 
    </div>
    
   
    
    </section>
    );
};