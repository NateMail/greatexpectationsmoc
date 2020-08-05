import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
