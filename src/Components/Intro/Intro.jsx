import React from "react";
import "./Intro.css";
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from'../../img/instagram.png'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';


const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Kubra Uysal</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Repudiandae, similique sit? Labore laborum dolores dolorem?
          </span>
        </div>
        <button className="button i-button">Hire Me!</button>
        <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
      </div>
    </div>
  );
};

export default Intro;
