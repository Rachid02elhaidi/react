import React, { useEffect, useState } from "react";
import "./SocialMedia.css";
import axios from "axios";

const SocialMedia = () => {
  const [social, setSocial] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setSocial(res.data.social);
    });
  }, []);
  const socialList = social.map((item) => {
    return (
      <div className="social" key={item.id}>
        <i className={item.icon}></i>
        <p>
          <span className="info1">{item.title}</span>
          <span className="info2">{item.body} </span>
        </p>
      </div>
    );
  });
  return <div className="social-media">{socialList}</div>;
};

export default SocialMedia;
