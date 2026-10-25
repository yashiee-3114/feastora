import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Services from './sections/Services.jsx';
import Approach from './sections/Approach.jsx';
import Gallery from './sections/Gallery.jsx';
import WhyFeastora from './sections/WhyFeastora.jsx';
import FAQ from './sections/FAQ.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Gallery />
        <WhyFeastora />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;