import React from "react";
import Footer from "./components/Footer";
import Middle from "./components/Middle";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <div>
        <a href="/" className="btn btn--white btn--animated">
          Test Button
        </a>
      </div>
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
