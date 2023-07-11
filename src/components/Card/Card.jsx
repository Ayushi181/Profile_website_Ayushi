import React from "react";
import "./Card.css";

const Card = ({lnk,emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>

      <a href={lnk} download>
      <button href={lnk} className="button s-button" style={{marginTop:6}}>Github Link</button>
          </a>

      
    </div>
  );
};

export default Card;
