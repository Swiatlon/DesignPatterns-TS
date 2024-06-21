import { IStaffMember, IStaffMemberConfig } from "./Factory.Interfaces";

abstract class StaffMember implements IStaffMember {
  skills: string[];
  salary: number;
  benefits: string[];

  constructor({
    baseSkills,
    additionalSkills,
    baseBenefits,
    additionalBenefits,
  }: IStaffMemberConfig) {
    this.skills = baseSkills.concat(additionalSkills);
    this.salary = 40000;
    this.benefits = baseBenefits.concat(additionalBenefits);
  }
}

export class Developer extends StaffMember {
  constructor(skills: string[], benefits: string[]) {
    super({
      baseSkills: ["programming"],
      additionalSkills: skills,
      baseBenefits: ["computer"],
      additionalBenefits: benefits,
    });
  }
}

export class Salesman extends StaffMember {
  constructor(skills: string[], benefits: string[]) {
    super({
      baseSkills: ["selling"],
      additionalSkills: skills,
      baseBenefits: ["book"],
      additionalBenefits: benefits,
    });
  }
}

export class BusinessAnalyst extends StaffMember {
  constructor(skills: string[], benefits: string[]) {
    super({
      baseSkills: ["analyzing"],
      additionalSkills: skills,
      baseBenefits: ["fake money"],
      additionalBenefits: benefits,
    });
  }
}
