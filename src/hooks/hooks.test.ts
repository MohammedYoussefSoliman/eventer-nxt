import { renderHook, cleanup, waitFor, act } from "@testing-library/react";
import { useFetchData } from "./useFetchData";

const mockedData = ["some data"];

describe("useFetchData()", () => {
  afterEach(cleanup);
  test("should return init data correctly", async () => {
    const { result } = renderHook(() => useFetchData("url"));
    const { data, error, loading } = result.current;

    expect(data).toBeNull();
    expect(error).toBeNull();
    expect(loading).toBe(true);
  });
  test("should return data correctly", async () => {
    const fetchSpy = jest.spyOn(global, "fetch");
    fetchSpy.mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(mockedData) } as Response)
    );
    const { result } = renderHook(() => useFetchData("url"));

    await waitFor(() =>
      expect(result.current).toEqual({
        data: mockedData,
        error: null,
        loading: false,
      })
    );
  });
  test("should handle error correctly", async () => {
    const errorResponse = new Error("error response");
    const fetchSpy = jest.spyOn(global, "fetch");
    fetchSpy.mockImplementation(() => Promise.reject(errorResponse));
    const { result } = renderHook(() => useFetchData("url"));

    await waitFor(() => {
      const { error } = result.current;
      expect(error).toBe(errorResponse);
    });
  });
});
