import React from "react";
import { useTheme } from "@emotion/react";

import Icon from "@/components/Icon";
import { Flex } from "@/components/Grids";
import Spinner from "@/components/Spinner";
import { P3 } from "@/components/Typography";
import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

export default function Button({
  children,
  isLoading,
  icon,
  variant = "primary",
  disabled,
  ...rest
}: ButtonProps) {
  const { colors } = useTheme();

  const checkChildren = React.useMemo(() => {
    if (typeof children === "string") {
      return (
        <P3
          text={children}
          color={colors.pallet[variant === "primary" ? 0 : 900]}
          capitalizeFirstLetter
          weight={600}
        />
      );
    }
    return children;
  }, [children, colors.pallet, variant]);

  return (
    <StyledButton variant={variant} disabled={isLoading || disabled} {...rest}>
      {isLoading ? (
        <Flex align="center" gap="8px" fullWidth>
          <Spinner />
          <Flex align="center" justify="center" flex={1}>
            loading...
          </Flex>
        </Flex>
      ) : icon ? (
        <Flex align="center" gap="8px" fullWidth>
          <Icon
            name={icon}
            color={
              variant === "primary" ? colors.pallet[0] : colors.pallet[800]
            }
          />
          <Flex align="center" justify="center" flex={1}>
            {checkChildren}
          </Flex>
        </Flex>
      ) : (
        checkChildren
      )}
    </StyledButton>
  );
}
