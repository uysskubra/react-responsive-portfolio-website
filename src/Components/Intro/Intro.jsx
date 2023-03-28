import React from "react";
import "./Intro.css";

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
      </div>
      <div className="i-right">
        i am right side
      </div>
    </div>
  );
};

export default Intro;
