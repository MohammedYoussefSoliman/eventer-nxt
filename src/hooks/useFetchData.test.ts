import { renderHook, waitFor } from "@testing-library/react";
import { useFetchData } from "./useFetchData";

const responseMock = ["some data"];

describe("useFetchData", () => {
  test("should return initial data correctly", () => {
    const { result } = renderHook(() => useFetchData("url"));

    const { data, loading, error } = result.current;

    expect(data).toBeNull();
    expect(error).toBeNull();
    expect(loading).toBe(true);
  });

  test("should fetch data correctly", async () => {
    const fetchSpy = jest.spyOn(global, "fetch");
    fetchSpy.mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(responseMock) } as Response)
    );
    const { result } = renderHook(() => useFetchData("url"));

    await waitFor(() => {
      expect(result.current).toEqual({
        data: responseMock,
        error: null,
        loading: false,
      });
    });
  });
  test("should return error if failed", async () => {
    const errorResponse = new Error("error response");
    const fetchSpy = jest.spyOn(global, "fetch");
    fetchSpy.mockImplementation(() => Promise.reject(errorResponse));
    const { result } = renderHook(() => useFetchData("url"));

    await waitFor(() => {
      expect(result.current).toEqual({
        data: null,
        error: errorResponse,
        loading: false,
      });
    });
  });
});
