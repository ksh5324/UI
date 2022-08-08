import React from "react";
import styled from "styled-components";

export type ButtonGroupProps = {
  /** 버튼을 보여줄 방향 */
  direction: "row" | "column";
  /** 버튼을 우측에 보여줍니다. */
  rightAlign?: boolean;
  /** 버튼과 버튼사이의 간격을 설정합니다. */
  gap: string | number;
  /** 버튼 그룹에서 보여줄 버튼들 */
  children: React.ReactNode;
  /* 스타일 커스터마이징 하고싶을 때 사용 */
  className?: string;
};

/**
 * 여러개의 `Button` 컴포넌트를 보여주고 싶거나, 버튼을 우측에 정렬하고 싶을 땐 `ButtonGroup` 컴포넌트를 사용하세요.
 */
const ButtonGroup = ({
  direction,
  rightAlign,
  children,
  gap,
  className,
}: ButtonGroupProps) => {
  return (
    <ButtonGroupStyle defaultValue={gap} slot={direction}>
      <div
        className={`${className} ${
          direction === "row" ? "marginLeft" : "marginTop"
        } ${rightAlign ? "rightAlignStyle" : ""}`}
      >
        {children}
      </div>
    </ButtonGroupStyle>
  );
};

const ButtonGroupStyle = styled.span`
  div {
    display: flex;
    flex-direction: ${(prop) => prop.slot};
  }
  .marginLeft span + span {
    margin-left: ${(prop) => prop.defaultValue};
  }
  .marginTop span + span {
    margin-top: ${(prop) => prop.defaultValue};
  }

  .rightAlignStyle {
    justify-content: flex-end;
  }
`;

ButtonGroup.defaultProps = {
  direction: "row",
  gap: "0.5rem",
};

export default ButtonGroup;
