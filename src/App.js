import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Footer />
    </div>
  );
}

export default App;
