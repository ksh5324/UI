import React from "react";
import PropTypes from "prop-types";
import "./item.css";

import CheckSvg from "../assets/check.svg";
import HeartSvg from "../assets/heart.svg";
import StarSvg from "../assets/star.svg";
import NotStarSvg from "../assets/notStar.svg";

/** 요소를 보여주는 item 컴포넌트입니다. */
const Item = ({
  type,
  title,
  description,
  tag,
  good,
  children,
  checked,
  score,
}) => {
  return (
    <>
      {type === "confirm" || type === "check" ? (
        <div className={type}>
          <h2 className={`${type}__title`}>{title}</h2>
          {type === "check" && checked && (
            <div className={`${type}__check`}>
              <img src={CheckSvg} />
            </div>
          )}
          <p className={`${type}__description`}>{description}</p>
          <ul className={`${type}__tagsGood`}>
            {tag.map((v) => (
              <li className={`${type}__tag`} key={v}>
                {v}
              </li>
            ))}
            <li className={`${type}__good`}>
              {good} <img src={HeartSvg} />
            </li>
          </ul>
          {type === "confirm" && (
            <div className={`${type}__child`}>{children}</div>
          )}
        </div>
      ) : type === "star" ? (
        <div className={type}>
          <div className={`${type}__container`}>
            {[1, 2, 3, 4, 5].map((v) =>
              score >= v ? <img src={StarSvg} /> : <img src={NotStarSvg} />
            )}
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
  /** item의 타입입니다. */
  type: PropTypes.oneOf(["confirm", "check", "star"]),
  /** 아이템 제목부분입니다. */
  title: PropTypes.string,
  /** 아이템에 들어갈 내용입니다. */
  description: PropTypes.string,
  /** 키워드 부분입니다. */
  tag: PropTypes.arrayOf(PropTypes.string),
  /** 좋아요의 수 입니다. */
  good: PropTypes.number,
  /** 자식 속성입니다. 주로 이는 confirm 타입에서 버튼이 들어가는 부분입니다. */
  children: PropTypes.any,
  /** 선택되었는지 확인하는 부분입니다. */
  checked: PropTypes.bool,
  /** star 타입에서 별점에 역할 입니다. */
  score: PropTypes.number,
};

Item.defaultProps = {
  type: "check",
  title: "Item",
  description: "description",
  checked: false,
};

export default Item;
