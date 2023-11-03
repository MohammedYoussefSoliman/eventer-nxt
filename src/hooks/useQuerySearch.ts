/* eslint-disable no-restricted-syntax */
import React from "react";
import { useLocation } from "react-router-dom";

type Params = {
  [key: string]: string;
};

export default function useQuerySearch() {
  const { search } = useLocation();

  const queryParams = React.useMemo(
    () => new URLSearchParams(search),
    [search]
  );
  let params: Params = {};
  for (const [key, value] of queryParams) {
    params = {
      ...params,
      [key]: value,
    };
  }
  return params;
}
