import React from "react";
import { cardData, userData } from "../utils/card";
import style from "./Card.module.css";

const Card = () => {
  return (
    <div>
      {cardData.map((item, i) => (
        <ul key={i}>
          <li>{item.id}</li>
          <li>{item.title}</li>
          <img className={style.img} src={item.img} alt="" />
        </ul>
      ))}
    </div>
  );
};
export default Card;
