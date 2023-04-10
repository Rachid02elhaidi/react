import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/index"
import Home from "./Components/Home/index"
import About from "./Components/About/index"
import Profile from "./Components/Profile/index"
import Portfolio from "./Components/Portfolio/index"
import SocialMedia from "./Components/SocialMedia/index" 
import Work from "./Components/Work/index"
import Footer from "./Components/Footer/index"
import Contact from "./Components/Contact/index"
import "./Components/images/Portfolio/portfolio-img1.jpg"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/social_media" element={<SocialMedia />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
