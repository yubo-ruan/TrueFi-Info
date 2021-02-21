import React from "react";
import styled, { css } from "styled-components";

interface StyledProps {
  readonly top?: string;
  readonly left?: string;
  readonly right?: string;
}

const Spinner = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;

  ${(props: StyledProps) => props.top && css`
    top: ${(props: StyledProps) => props.top};
  `}
  
  ${(props: StyledProps) => props.left && css`
    left: ${(props: StyledProps) => props.left};
  `}
  
  right: ${(props: StyledProps) => props.right ? props.right : "2rem"};
  
  border-radius: 5px;
  background-color: transparent;
  color: transparent;
  box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
    18px 0 0 0 #9880ff, 12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0),
    0 18px 0 0 rgba(152, 128, 255, 0),
    -12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0),
    -18px 0 0 0 rgba(152, 128, 255, 0),
    -12.72984px -12.72984px 0 0 rgba(152, 128, 255, 0);
  animation: dotSpin 1.5s infinite linear;

  @keyframes dotSpin {
    0%,
    100% {
      box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
        18px 0 0 0 #9880ff, 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    12.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 0 #9880ff, 18px 0 0 0 #9880ff,
        12.72984px 12.72984px 0 0 #9880ff, 0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    25% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 #9880ff,
        12.72984px 12.72984px 0 0 #9880ff, 0 18px 0 0 #9880ff,
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    37.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 0 #9880ff,
        0 18px 0 0 #9880ff, -12.72984px 12.72984px 0 0 #9880ff,
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    50% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 #9880ff,
        -12.72984px 12.72984px 0 0 #9880ff, -18px 0 0 0 #9880ff,
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    62.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 0 #9880ff,
        -18px 0 0 0 #9880ff, -12.72984px -12.72984px 0 0 #9880ff;
    }
    75% {
      box-shadow: 0 -18px 0 0 #9880ff,
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 0 #9880ff, -12.72984px -12.72984px 0 0 #9880ff;
    }
    87.5% {
      box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 0 #9880ff;
    }
  }
`;

interface LoaderProps {
  top?: string;
  left?: string;
  right?: string;
}

const Loader = (props: LoaderProps) => {
  const { top, left, right } = props;

  return( <Spinner top={top} left={left} right={right} />);
};

export default Loader;