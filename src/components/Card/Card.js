import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./card.css";
import { Badge } from "@material-ui/core/";

const Card = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <div className="card">
      <Badge
        badgeContent={vote_average}
        color={vote_average >= 7 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      ></img>
      <p className="title">{title}</p>
      <span className="subTitle">
        {media_type.toUpperCase()}
        <span>{date}</span>
      </span>
    </div>
  );
};

export default Card;
