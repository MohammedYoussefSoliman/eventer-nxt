import React from "react";
import loGet from "lodash/get";
import { showError } from "@/state/ui-actions/slice";
import { useAxiosInstance, useAppDispatch } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { H5 } from "@/components/Typography";
import Spinner from "@/components/Spinner";
import { Flex } from "@/components/Grids";
import { Button } from "@/components/Buttons";
import Wrapper from "../styles";
import SessionsTable from "../SessionsTable";

export default function Visitor() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { get } = useAxiosInstance();
  const limit = 10;
  const [loading, setLoading] = React.useState<boolean>(true);
  const [page, setPage] = React.useState<number>(1);
  const [recordsCount, setRecordsCount] = React.useState<number>(0);
  const [sessions, setSessions] = React.useState<any[]>();
  const getSessions = React.useCallback(async () => {
    try {
      const response = await get("/get-sessions", {
        params: {
          event_id: 19,
          offset: (page - 1) * limit + 1,
          limit,
        },
      });
      setRecordsCount(loGet(response, "data.count", 0));
      setSessions(loGet(response, "data.sessions", null));
      setLoading(false);
    } catch (err) {
      dispatch(showError("something went wrong please try again later"));
    }
  }, [dispatch, get, page]);

  React.useEffect(() => {
    getSessions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loading)
    return (
      <Wrapper
        direction="column"
        justify="center"
        align="center"
        fullHeight
        fullWidth
      >
        <Spinner />
      </Wrapper>
    );

  return (
    <Wrapper direction="column">
      <Flex pv="8px" pe="8px" fullWidth justify="space-between" align="center">
        <H5 text="all sessions" />
        <Button
          onClick={() => navigate("/create-session")}
          icon="plus"
          variant="secondary"
        >
          new session
        </Button>
      </Flex>
      {sessions && (
        <SessionsTable
          sessions={sessions}
          limit={limit}
          count={recordsCount}
          handleNext={() => setPage((prev) => prev + 1)}
          handlePrev={() => setPage((prev) => prev - 1)}
          dotClick={(value) => setPage(value)}
          activePage={page}
        />
      )}
    </Wrapper>
  );
}
