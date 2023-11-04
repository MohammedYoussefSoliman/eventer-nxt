import _ from "lodash";
import { useAppSelector } from "./reduxHooks";

export default function useAuth() {
  const {
    auth: { token, user },
  } = useAppSelector((state) => state);

  return {
    loggedIn: _.isObject(token),
    ...user,
  };
}
