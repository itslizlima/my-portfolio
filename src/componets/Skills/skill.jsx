import React from "react";

import styles from "./skill.module.css";

import skills from "../../data/skills.json";

import softskills from "../../data/softskills.json";

import { getImageUrl } from "../../utils";


export const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                {skills.map((skill,id) => {
                    return ( 
                    <div className={styles.skills} key={id}>
                        <div className={styles.skillsImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                          </div>
                          <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
                
            
        </div>
        </section>
    
    );
};