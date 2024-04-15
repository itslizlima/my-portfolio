import React from "react";

import styles from "./Hero.module.css";

import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Liz!</h1>
        <h2 className={styles.titleH2}>I am a Front End Developer.</h2>
       
        
        <p className={styles.description}>
           Welcome to my portfolio!<br /> 
        </p>
       
        
    </div>
    
    <img className={styles.profileImg} src={getImageUrl("main/laptopp.png")} width={"270px"} alt="Profile image" />

    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    
    </section>
    );
};