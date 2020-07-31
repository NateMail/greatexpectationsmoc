import React from "react";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
