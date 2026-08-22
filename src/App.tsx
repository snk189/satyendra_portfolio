import { Navbar } from "./components/Navbar";
import { BackToTop } from "./components/BackToTop";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Interests } from "./sections/Interests";
import { Projects } from "./sections/Projects";
import { TechStack } from "./sections/TechStack";
import { Leadership } from "./sections/Leadership";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <Interests />
        <Projects />
        <TechStack />
        <Leadership />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
