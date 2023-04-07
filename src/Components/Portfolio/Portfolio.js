import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import axios from "axios";

const Portfolio = () => {
  // state = {
  //   images : []
  // }

  // Hooks Method
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setImages(res.data.portfolio);
    });
  }, []);
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
      {portfolioImages}
    </div>
  );
};

export default Portfolio;
