import { css } from "@emotion/react";
import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import devices from "@/theme/sizes";
import { Flex } from "@/components/Grids";
import { Property } from "csstype";

type StyledDividerType = {
  color?: Property.Color;
};

const shouldForwardProp = (prop: string) =>
  isPropValid(prop) && !["color"].includes(prop);

const StyledDivider = styled(Flex, { shouldForwardProp })<StyledDividerType>`
  width: 100%;
  height: 0.6px;
  ${({ theme, color }) => css`
    background: ${color || theme.colors.grey[200]};
  `}
  ${devices.md} {
    height: 1px;
  }
`;

export default StyledDivider;
