import React from "react";
import "./item.css";
import PropTypes from "prop-types";

const Item = ({
  type,
  title,
  description,
  tag,
  good,
  children,
  checked,
  score,
}: any) => {
  return (
    <>
      {type === "confirm" || type === "check" ? (
        <div className={type}>
          <h2 className={`${type}__title`}>{title}</h2>
          {type === "check" && checked && (
            <div className={`${type}__check`}>check</div>
          )}
          <p className={`${type}__description`}>{description}</p>
          <ul className={`${type}__tagsGood`}>
            {tag.map((v: any) => (
              <li className={`${type}__tag`} key={v}>
                {v}
              </li>
            ))}
            <li className={`${type}__good`}>{good} H</li>
          </ul>
          {type === "confirm" && (
            <div className={`${type}__child`}>{children}</div>
          )}
        </div>
      ) : type === "star" ? (
        <div className={type}>
          <div className={`${type}__container`}>
            {[1, 2, 3, 4, 5].map((v) => (
              <div>S</div>
            ))}
          </div>
          <div className={`${type}__description`}>{description}</div>
        </div>
      ) : (
        <div>error</div>
      )}
    </>
  );
};

Item.propTypes = {
  type: PropTypes.oneOf(["confirm", "check", "star"]),
  title: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.arrayOf(PropTypes.string),
  good: PropTypes.number,
  children: PropTypes.any,
  checked: PropTypes.bool,
  score: PropTypes.number,
};

Item.defaultProps = {
  type: "check",
  title: "Item",
  description: "description",
  checked: false,
};

export default Item;
