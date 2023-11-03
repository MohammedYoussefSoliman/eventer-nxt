import React from "react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { formDataHandler } from "@/helpers/functions";
import logoutService from "@/state/auth/logoutService";
import urls from "@/helpers/urls";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export default function useAuth() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    auth: { token, user },
  } = useAppSelector((state) => state);

  const logout = React.useCallback(async () => {
    let formDataObj = {};
    const formData = formDataHandler({
      ...formDataObj,
    });
    dispatch(
      logoutService({
        formData,
        onSuccess() {
          navigate(urls.home);
        },
      })
    );
  }, [dispatch, navigate]);

  return {
    loggedIn: _.isObject(token),
    ...user,
    logout,
  };
}
