import React from "react";
import { Container, Flex } from "@/components/Grids";
import { P2 } from "@/components/Typography";
import { useBreakpoints } from "@/hooks";
import Wrapper from "./styles";

export default function Header() {
  const { medium } = useBreakpoints();
  const [scrolledView, setScrolledView] = React.useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 30) {
      setScrolledView(true);
    } else if (scrolled <= 30) {
      setScrolledView(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <Wrapper
      scrolled={scrolledView}
      as="header"
      align="center"
      justify="center"
      fullWidth
    >
      <P2 text="this is header" />
    </Wrapper>
  );
}
