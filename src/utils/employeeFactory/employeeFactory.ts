import { random } from "@/helpers/functions";

interface Employee {
  id: string;
  fullName: string;
  title: string;
  seniority: "junior" | "senior" | "lead";
}

export const employeeFactory = (
  firstName: string,
  lastName: string,
  title: string,
  seniority: "junior" | "senior" | "lead"
): Employee => {
  return {
    id: random(8),
    fullName: `${firstName} ${lastName}`,
    title,
    seniority,
  };
};
