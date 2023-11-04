import React from "react";
import { useTheme } from "@emotion/react";

import Icon from "@/components/Icon";
import { Flex } from "@/components/Grids";
import Spinner from "@/components/Spinner";
import { StyledIconButton } from "./styles";
import { IconButtonProps } from "./types";

export default function IconButton({
  isLoading,
  icon,
  variant = "primary",
  size = "md",
  disabled,
  ...rest
}: IconButtonProps) {
  const { colors } = useTheme();

  return (
    <StyledIconButton
      variant={variant}
      disabled={isLoading || disabled}
      size={size}
      {...rest}
    >
      {isLoading ? (
        <Flex align="center" fullWidth>
          <Spinner />
        </Flex>
      ) : (
        <Icon
          name={icon}
          color={
            variant === "secondary" ? colors.pallet[800] : colors.pallet[0]
          }
          size={size === "md" ? 24 : 18}
        />
      )}
    </StyledIconButton>
  );
}
