import { IStaffMember } from "./Factory.Interfaces";
import { Developer, Salesman, BusinessAnalyst } from "./Factory.Models";

class EmployeeFactory {
  createEmployee(
    role: string,
    skills: string[] = [],
    benefits: string[] = []
  ): IStaffMember {
    switch (role.toLowerCase()) {
      case "dev":
        return new Developer(skills, benefits);
      case "sale":
        return new Salesman(skills, benefits);
      case "ba":
        return new BusinessAnalyst(skills, benefits);
      default:
        throw new Error("Invalid role!");
    }
  }
}

const factory = new EmployeeFactory();
const dev = factory.createEmployee(
  "dev",
  ["JavaScript", "React"],
  ["health insurance"]
);
const sale = factory.createEmployee(
  "sale",
  ["communication", "negotiation"],
  ["car allowance"]
);
const ba = factory.createEmployee("ba", ["data analysis"], ["401k"]);

console.log(dev);
console.log(sale);
console.log(ba);
