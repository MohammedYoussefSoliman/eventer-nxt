import * as functions from "@/helpers/functions";

import { employeeFactory } from "./employeeFactory";

describe("employeeFactory()", () => {
  test("should generate new employee data correctly", () => {
    const randomSpy = jest.spyOn(functions, "random");
    randomSpy.mockImplementation(() => "test-id");
    const employee = employeeFactory(
      "Mohammed",
      "Soliman",
      "web developer",
      "senior"
    );

    expect(employee.id).toBe("test-id");
  });
});
