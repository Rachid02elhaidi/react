import React from "react";
import "./style.css";
// import axios from "axios";
import data from "../js/data.json"

const SocialMedia = () => {
  // const [social, setSocial] = useState([]);
  // useEffect(() => {
    console.log(data.social);
  //   axios.get(daba).then((res) => {
  //     setSocial(res.data.social);
  //   });
  // }, []);
  const socialList = data.social.map((item) => {
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
