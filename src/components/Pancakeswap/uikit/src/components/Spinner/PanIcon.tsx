import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 256 256" {...props}>
      <svg version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 543" width="300" height="300">
        <title>Background</title>
        <defs>
          <image width="300" height="300" id="img1" href="https://babylucyofficial.com/lll.png" />
        </defs>
        <use id="Background" href="#img1" x="0" y="0" />
      </svg>
    </Svg>
  );
};

export default Icon;
