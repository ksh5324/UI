import React from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import styled from "styled-components";

export type DialogProps = {};

const Dialog = (props: DialogProps) => {
  return (
    <DialogStyle>
      <div className="gray"></div>
      <div className="white">
        <div className="whiteBox">
          <h3>포스트 삭제</h3>
          <p>포스트를 정말로 삭제하시겠습니까?</p>
          <ButtonGroup direction="row" gap="10px" rightAlign>
            <Button theme="tertiary">취소</Button>
            <Button>삭제</Button>
          </ButtonGroup>
        </div>
      </div>
    </DialogStyle>
  );
};

const DialogStyle = styled.span`
  height: 100%;
  .gray {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
  }
  .white {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .whiteBox {
    box-sizing: border-box;
    border-radius: 4px;
    width: 25rem;
    background: white;
    box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
    padding: 2rem;

    h3 {
      font-size: 1.5rem;
      color: #343a40;
      margin-top: 0;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.125rem;
      margin: 0;
      color: #868e96;
      margin-bottom: 3rem;
    }
  }
`;

export default Dialog;
