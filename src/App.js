import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Profile from "./Components/Profile/Profile"
import Portfolio from "./Components/Portfolio/Portfolio"
import SocialMedia from "./Components/SocialMedia/SocialMedia" 
import Work from "./Components/Work/Work"
import Footer from "./Components/Footer/Footer"
import Contact from "./Components/Contact/Contact"

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
