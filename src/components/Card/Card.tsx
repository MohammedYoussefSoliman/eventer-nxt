import React from "react";

import { CardProps } from "./types";

export default function Card({
  heading,
  content,
  helperText,
  onClick,
  onCount,
}: CardProps) {
  const [count, setCount] = React.useState<number | null>(null);
  return (
    <div>
      <h3>{heading}</h3>
      {typeof content === "string" ? <p>{content}</p> : content}
      {helperText && <small data-testid="helper-text">{helperText}</small>}
      <button type="button" onClick={onClick}>
        approve
      </button>
      <button
        type="button"
        onClick={() => {
          onCount(20);
          setCount(20);
        }}
      >
        count
      </button>
      {count && <span>{count}</span>}
    </div>
  );
}
