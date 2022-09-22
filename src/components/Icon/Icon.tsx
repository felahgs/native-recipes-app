import React from "react";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import { IconProps } from "react-native-vector-icons/Icon";

import icoMoonConfig from "../../../assets/icons/selection.json";

// We use the IcoMoon app (https://icomoon.io) to generate a custom font made up
// of SVG icons. The actual font file is loaded up-front in src/index.js.
const NewIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  "icomoon",
  "icomoon.ttf",
);

const Icon = (props: IconProps) => {
  return <NewIcon size={props.size || 24} {...props} />;
};

export default Icon;
