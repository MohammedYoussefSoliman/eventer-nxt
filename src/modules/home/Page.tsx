import { H1, H4, P2 } from "@/components/Typography";
import { Flex } from "@/components/Grids";
import Avatar from "@/components/Avatar";
import Tooltip from "@/components/RadixTooltip";
import { employeeFactory } from "@/utils";
import Wrapper from "./styles";

export default function Visitor() {
  return (
    <Wrapper direction="column">
      <H1 text="this is home" />
      <Flex direction="column" gap="1rem" p="2rem">
        <H4 text="components" />
        <Tooltip
          tip={
            <Flex>
              <P2>cool image</P2>
            </Flex>
          }
        >
          <Avatar
            image="https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            dataTest="avatar-component"
          />
        </Tooltip>
        <P2
          text={JSON.stringify(
            employeeFactory("Mohammed", "Soliman", "web developer", "senior")
          )}
        />
      </Flex>
    </Wrapper>
  );
}
