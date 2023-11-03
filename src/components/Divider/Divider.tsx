import { Property } from "csstype";

import StyledDivider from "./style";

type Props = {
  color?: Property.Color;
};
export default function Divider({ color }: Props) {
  return <StyledDivider color={color} />;
}
