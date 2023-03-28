import React from "react";
import "./Intro.css";
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from'../../img/instagram.png'


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
        i am right side
      </div>
    </div>
  );
};

export default Intro;
