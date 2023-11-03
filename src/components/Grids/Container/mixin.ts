import { css } from "@emotion/react";
import devices from "@/theme/sizes";
import { ConfigWidth } from "./types";
import config from "./config";

const manageContainerConfig = (width: ConfigWidth) => {
  const containerConfig = config[width];
  const keys = Object.keys(containerConfig) as Array<keyof typeof devices>;

  let stylesObject = {};

  keys.forEach((key) => {
    stylesObject = {
      ...stylesObject,
      [devices[key]]: {
        maxWidth: containerConfig[key],
      },
    };
  });

  return css(stylesObject);
};

export default manageContainerConfig;
