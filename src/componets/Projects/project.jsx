import React from "react";

import styles from "./projects.module.css";

import project from "../../data/projects.json";

import { getImageUrl } from "../../utils";

export const Projects = () => {
    return(
        <section className={styles.container} id="projects">
        <h2 className={styles.title}>My Projects</h2>
        <div className={styles.content}>
            <div className={styles.project}>
            {project.map((projects,id) => {
                    return ( 
                    <div className={styles.projectsContainer} key={id}>
    
                        <div className={styles.projectsImageContainer}>
                            <img src={getImageUrl(projects.imageSrc)} alt={projects.title} />
                          </div>
                        <div className={styles.topBlur} />
                          <p>{projects.title}</p>
                        </div>
                    );
                })}
            </div>
            </div>
        </section>
    
    );
};
