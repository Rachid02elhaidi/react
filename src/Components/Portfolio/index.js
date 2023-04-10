import React, { Component } from "react";
import "./style.css";
import data from "../js/data.json";

class Portfolio extends Component {
  state = {
    images: data.portfolio,
  };
  render() {
    const images = this.state.images;
    const portfolioImages = images.map((item) => {
      return (
        <div className="box" key={item.id}>
          <div>
            <img src={item.image} alt="" />
            <p className="overlay">
              <span>Show Image</span>
            </p>
          </div>
        </div>
      );
    });
    console.log(this.state.images[0].image);
    return (
      <div className="portfolio">
        <h2 className="portfolio-title">
          <span>My</span> Portfolio
        </h2>
        <ul className="portfolio-list">
          <li className="portfolio-item active">All</li>
          <li className="portfolio-item">HTML</li>
          <li className="portfolio-item">Photoshop</li>
          <li className="portfolio-item">Wordpress</li>
          <li className="portfolio-item">Mobile</li>
        </ul>
        <div>{portfolioImages} </div>
        <img src={require("../images/Portfolio/portfolio-img2.jpg")} alt="" />
      </div>
    );
  }
}

export default Portfolio;
