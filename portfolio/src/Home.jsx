import Hero from './Hero/Hero';
import Skill from './Skills/Skills';
import Contact from './Contact/Contact';
import About from './About/About';

export default function Home() {
    return(
        <>
        <Hero/>
        <About/>
        <Skill />
        <Contact />
        </>
    );
}