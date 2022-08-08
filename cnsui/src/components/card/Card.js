import React from "react";
import "./card.css";

const Card = ({ type, title, description, tag, good, children }) => {
  return (
    <>
      {type === "confirm" ? (
        <div className={type}>
          <h2 className={`${type}__title`}>{title}</h2>
          <p className={`${type}__description`}>{description}</p>
          <ul className={`${type}__tagsGood`}>
            {tag.map((v) => (
              <li className={`${type}__tag`} key={v}>
                {v}
              </li>
            ))}
            <li className={`${type}__good`}>{good}</li>
          </ul>
          <div className={`${type}__child`}>{children}</div>
        </div>
      ) : (
        <div>error</div>
      )}
    </>
  );
};

export default Card;
