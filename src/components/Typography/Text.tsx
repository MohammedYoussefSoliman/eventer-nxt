import { useTheme } from "@emotion/react";
import StyledText from "./styles";
import { TypographyProps } from "./types";

function Text({
  text = "",
  children,
  isHeader,
  noTrans,
  ...rest
}: TypographyProps) {
  const textLength = `${text}`.length;
  const { colors } = useTheme();

  let content;

  if (children) {
    content = noTrans ? children : children;
  } else {
    content = noTrans ? text : `${text}`;
  }

  return (
    <StyledText
      length={textLength}
      color={colors.text.body}
      isHeader={isHeader}
      capitalizeFirstLetter={isHeader}
      {...rest}
    >
      {content}
    </StyledText>
  );
}

export default Text;
