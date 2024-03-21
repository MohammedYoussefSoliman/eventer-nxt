import { employeeFactory } from "./employeeFactory";
import * as functions from "@/helpers/functions";

describe("employeeFactory()", () => {
  test("should generate fullName correctly", () => {
    const employee = employeeFactory(
      "Mohammed",
      "Soliman",
      "web developer",
      "senior"
    );

    expect(employee.fullName).toBe("Mohammed Soliman");
  });
  test("should generate id correctly", () => {
    const randomSpy = jest.spyOn(functions, "random");
    randomSpy.mockImplementation(() => "some-id");
    const employee = employeeFactory(
      "Mohammed",
      "Soliman",
      "web developer",
      "senior"
    );
    expect(employee.id).toBe("some-id");
  });
});
