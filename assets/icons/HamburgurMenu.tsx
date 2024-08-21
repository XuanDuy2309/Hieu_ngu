import * as React from "react";
import Svg, { Rect, SvgProps } from "react-native-svg";
const HamburgerMenu = (props:SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect x={9} y={16} width={10} height={1.6} rx={0.8} fill="#0D0B26" />
    <Rect x={5} y={11.2} width={14} height={1.6} rx={0.8} fill="#0D0B26" />
    <Rect x={5} y={6.2} width={14} height={1.6} rx={0.8} fill="#0D0B26" />
  </Svg>
);
export default HamburgerMenu;