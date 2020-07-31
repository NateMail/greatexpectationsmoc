import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
