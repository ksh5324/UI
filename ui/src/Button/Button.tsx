import React from "react";
import styled from "styled-components";

type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새를 설정합니다. */
  theme: "primary" | "secondary" | "tertiary";
  /** 버튼의 크기를 설정합니다 */
  size: "small" | "medium" | "big";
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Button = ({
  children,
  onClick,
  theme,
  size,
  disabled,
  width,
}: ButtonProps) => {
  return (
    <ButtonStyle>
      <button
        className={`${theme} ${size}`}
        onClick={onClick}
        disabled={disabled}
        style={{ width: `${width}` }}
      >
        {children}
      </button>
    </ButtonStyle>
  );
};

Button.defaultProps = {
  theme: "primary",
  size: "medium",
};

const ButtonStyle = styled.div`
  button {
    outline: none;
    border: none;
    box-sizing: border-box;
    height: 2rem;
    font-size: 0.875rem;
    padding: 0 1rem;
    border-radius: 0.25rem;
    line-height: 1;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    &:focus {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  .secondary {
    background: #e9ecef;
    color: #343a40;
    &:hover:enabled {
      background: #f1f3f5;
    }
    &:active:enabled {
      background: #dee2e6;
    }
    &:disabled {
      color: #c6d3e1;
    }
  }
  .primary {
    background: #20c997;
    color: white;
    &:hover:enabled {
      background: #38d9a9;
    }
    &:active:enabled {
      background: #12b886;
    }
    &:disabled {
      background: #aed9cc;
    }
  }
  .tertiary {
    background: none;
    color: #20c997;
    &:hover:enabled {
      background: #e6fcf5;
    }
    &:active:enabled {
      background: #c3fae8;
    }
    &:disabled {
      color: #bcd9d0;
    }
  }
  .small {
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  }
  .medium {
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  }
  .big {
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  }
`;

// const themes = {
//   primary: css`
//     background: #20c997;
//     color: white;
//     &:hover {
//       background: #38d9a9;
//     }
//     &:active {
//       background: #12b886;
//     }
//   `,
//   secondary: css`
//     background: #e9ecef;
//     color: #343a40;
//     &:hover {
//       background: #f1f3f5;
//     }
//     &:active {
//       background: #dee2e6;
//     }
//   `,
//   tertiary: css`
//     background: none;
//     color: #20c997;
//     &:hover {
//       background: #e6fcf5;
//     }
//     &:active {
//       background: #c3fae8;
//     }
//   `,
// };

export default Button;
