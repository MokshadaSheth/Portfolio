import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { About, Experience, Skills, AISection, Achievements, BeyondCode, Contact, Footer } from "./components/Sections";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero /><About /><Experience /><Projects /><Skills /><AISection /><Achievements />
        {/* <BeyondCode /> */}
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
