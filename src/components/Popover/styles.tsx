import styled from "@emotion/styled";
import { Popover as MuiPopover } from "@mui/material";
import getTheme from "@/theme";
import devices from "@/theme/sizes";

const theme = getTheme();

const { colors } = theme;

const StyledPopover = styled(MuiPopover)`
  .MuiPaper-root {
    border-radius: 8px !important;
    padding: 14px;
    min-width: 250px;
    ${devices.sm} {
      padding: 16px;
    }
    ${devices.md} {
      border-radius: 20px !important;
    }
    border: 1px solid ${colors.pallet[300]};
  }
`;

export default StyledPopover;
