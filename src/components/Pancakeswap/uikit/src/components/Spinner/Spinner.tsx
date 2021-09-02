import React from "react";
import styled, { keyframes } from "styled-components";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";
import PanIcon from "./PanIcon";
import PancakeIcon from "./PancakeIcon";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const RotatingPancakeIcon = styled(PancakeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingPanIcon = styled(PanIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const override = css`
  display: block;
  margin: 0 auto;
  position: absolute;
  z-index: 1;
  margin-left: 24%;
  margin-top: 23%;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  const [loading, setLoading] = React.useState(true);
  const [color, setColor] = React.useState("#47ffee");

  return (
    <Container>
      <BounceLoader color={color} loading={loading} css={override} size={45} />
      <FloatingPanIcon width={`${size}px`} />
    </Container>
  );
};

export default Spinner;
