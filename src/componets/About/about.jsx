import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About me</h2>
        <div className={styles.text}>
        
            <p><img className={styles.profileImg} src={getImageUrl("main/profile.png")}  width={"200px"} alt="Profile image" />
            I'm from Brazil, and currently live in Porto, Portugal. I'm crazy about dogs, rock music, travelling and fixing things. I study Systems Analysis and Development, at
 Estácio de Sá University. <br />Although I am at the beginning of my journey as a
 developer, I bring with me a strong determination and dedication to learn and grow
 professionally. I am fully aware that my learning potential expands significantly when I am immersed
 in a challenging and collaborative work environment. 
            </p>
        </div>

 <div className={styles.finaltxt}>
<p> Let's <b>g</b>r<b>o</b>w together?</p>
                <button>
                LET'S GO!
            </button>
        </div>
        
        
             </section>
};