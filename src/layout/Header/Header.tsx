import { P2 } from "@/components/Typography";
import Banner from "./Banner";
import Wrapper from "./styles";

export default function Header() {
  return (
    <Wrapper as="header" align="center" justify="space-between" fullWidth>
      <Banner />
      <P2 text="this is header" />
    </Wrapper>
  );
}
