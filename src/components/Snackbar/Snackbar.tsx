import React from "react";
import { SnackbarOrigin } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useAppDispatch } from "@/hooks";
import { dismissMessage } from "@/state/ui-actions/slice";
import { Flex } from "@/components/Grids";
import { P2 } from "@/components/Typography/Typography";
import withThemeProvider from "@/AppProvider/withThemeProvider";
import withMuiThemeProvider from "@/components/MuiThemeProvider/withMuiThemeProvider";
import { StyledSnackbar, Container } from "./styles";

interface SnackbarProps {
  message: string | null;
  type: "filled" | "normal";
  anchorOrigin?: SnackbarOrigin;
  autoHideDuration?: number;
  status?: "success" | "failure" | "info";
  onClose?: () => void;
  unsubscribe?: () => void;
}

type ContentProps = Omit<
  SnackbarProps,
  "duration" | "unsubscribe" | "anchorOrigin"
>;

function ContentComponent({
  message,
  status = "info",
  type = "normal",
  onClose,
}: ContentProps) {
  const { colors } = useTheme();
  const color = React.useMemo(() => {
    if (status === "failure") return colors.error[300];
    if (status === "success") return colors.green[500];
    return colors.pallet[0];
  }, [colors, status]);

  return (
    <Container status={status} type={type}>
      <Flex
        justify="space-between"
        gap={{ xs: 6, md: 12, lg: 24 }}
        align="center"
        fullWidth
      >
        <Flex gap={{ xs: 7, md: 10, lg: 18 }}>
          {message && (
            <P2
              text={message}
              color={type === "filled" ? colors.shades[100] : color}
            />
          )}
        </Flex>
        <button onClick={onClose}>X</button>
      </Flex>
    </Container>
  );
}

const Content = withThemeProvider<ContentProps>(ContentComponent);

function Snackbar({
  message,
  anchorOrigin,
  autoHideDuration,
  status = "info",
  onClose,
  unsubscribe,
  type = "normal",
}: SnackbarProps) {
  const [open, setOpen] = React.useState<boolean>(Boolean(message) || false);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (message) setOpen(Boolean(message));
    return () => {
      if (unsubscribe) unsubscribe();
      setOpen(false);
    };
  }, [message, unsubscribe, dispatch]);

  const handleClose = () => {
    setOpen(false);
    dispatch(dismissMessage());
    if (onClose) onClose();
    if (unsubscribe) unsubscribe();
  };

  return (
    <StyledSnackbar
      key={message}
      anchorOrigin={
        anchorOrigin || {
          vertical: "top",
          horizontal: "left",
        }
      }
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={(_, reason) => {
        if (type === "filled") {
          if (reason !== "clickaway") handleClose();
        } else {
          handleClose();
        }
      }}
      type={type}
    >
      <div>
        <Content
          message={message}
          status={status}
          type={type}
          onClose={handleClose}
        />
      </div>
    </StyledSnackbar>
  );
}

export default withMuiThemeProvider<SnackbarProps>(Snackbar);
