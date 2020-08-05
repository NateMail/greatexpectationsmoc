import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Rates from "./components/Rates";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Services />
      <About />
      <Rates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
