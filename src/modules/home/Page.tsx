import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { H1, P1 } from "@/components/Typography";
import { toggleAside } from "@/state/ui-actions/slice";
import Wrapper from "./styles";

export default function Visitor() {
  const dispatch = useAppDispatch();
  const {
    aside: { collapsed },
  } = useAppSelector((state) => state.uiActions);

  return (
    <Wrapper>
      <H1 text="this is home" />

      <button type="button" onClick={() => dispatch(toggleAside(!collapsed))}>
        <P1 text="collapse" />
      </button>
    </Wrapper>
  );
}
