import React, { Component } from "react";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <switch>
          <route exact path="/" component={Home} />
        </switch>
        <Footer />
      </div>
    );
  }
}

export default App;
