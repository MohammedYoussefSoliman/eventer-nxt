import React from "react";
import Icon from "@/components/Icon";
import StyledFigure from "./styles";

type Props = {
  url?: string;
  alt?: string;
};

export default function Figure({ url, alt }: Props) {
  return (
    <StyledFigure>
      {url ? (
        <img className="image" src={url} alt={alt} />
      ) : (
        <Icon name="question-mark" />
      )}
    </StyledFigure>
  );
}
