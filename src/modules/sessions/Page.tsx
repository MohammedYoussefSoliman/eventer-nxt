import React from "react";
import PaginationController from "@/components/PaginationController";
import { Button, IconButton } from "@/components/Buttons";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { H1 } from "@/components/Typography";
import { toggleAside } from "@/state/ui-actions/slice";
import Wrapper from "./styles";

export default function Visitor() {
  const dispatch = useAppDispatch();
  const {
    aside: { collapsed },
  } = useAppSelector((state) => state.uiActions);

  return (
    <Wrapper direction="column">
      <H1 text="this is sessions" />

      <Button
        icon="plus"
        type="button"
        onClick={() => dispatch(toggleAside(!collapsed))}
      >
        collapse
      </Button>
      <IconButton
        icon="chevron-up"
        type="button"
        size="sm"
        onClick={() => dispatch(toggleAside(!collapsed))}
      />
      <PaginationController
        pagesLength={30}
        activePage={1}
        handleNext={() => console.log("next")}
        dotClick={(value) => console.log(value)}
        handlePrev={() => console.log("prev")}
      />
    </Wrapper>
  );
}
