import styles from'./App.module.css';

import { Navbar } from './componets/Navbar/Navbar';

import { Hero } from './componets/Hero/hero';

import { About } from './componets/About/about';

import { Skills } from './componets/Skills/skill';

import { Projects } from './componets/Projects/project';

import { Contact } from './componets/Contact/contact';
 
function App() {
  return (
  <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact/>
  </div>
  );
};

export default App;
