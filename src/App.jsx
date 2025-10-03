import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-amber-100 font-sans min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 flex flex-col gap-8">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contacts">
          <Contacts />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;