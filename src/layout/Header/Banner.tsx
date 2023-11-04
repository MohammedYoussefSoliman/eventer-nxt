import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleAside } from "@/state/ui-actions/slice";
import { Flex } from "@/components/Grids";
import { IconButton } from "@/components/Buttons";
import { H5 } from "@/components/Typography";

export default function Banner() {
  const dispatch = useAppDispatch();
  const {
    aside: { collapsed },
  } = useAppSelector((state) => state.uiActions);

  return (
    <Flex width="230px" align="center" justify="space-between" fullHeight>
      <H5 text="evently" />
      <IconButton
        onClick={() => dispatch(toggleAside(!collapsed))}
        icon="chevron-circle"
        variant="transparent"
      />
    </Flex>
  );
}
