import withMuiThemeProvider from "@/components/MuiThemeProvider/withMuiThemeProvider";
import withThemeProvider from "@/AppProvider/withThemeProvider";
import { Modal as MuiModal } from "@mui/material";
import Wrapper, { ModalCard } from "./styles";
import { ModalProps } from "./types";

type ContentProps = Omit<ModalProps, "open">;

function ModalContent({ children }: ContentProps) {
  return (
    <Wrapper>
      <ModalCard>
        <div className="modal--body">{children}</div>
      </ModalCard>
    </Wrapper>
  );
}

const Content = withThemeProvider<ContentProps>(ModalContent);

function Modal({ children, open, onClose, ...rest }: ModalProps) {
  return (
    <MuiModal open={open} onClose={onClose}>
      <div>
        <Content onClose={onClose} {...rest}>
          {children}
        </Content>
      </div>
    </MuiModal>
  );
}

export default withMuiThemeProvider<ModalProps>(Modal);
