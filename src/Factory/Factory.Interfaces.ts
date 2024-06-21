export interface IStaffMember {
  skills: string[];
  salary: number;
  benefits: string[];
}

export interface IStaffMemberConfig {
  baseSkills: string[];
  additionalSkills: string[];
  baseBenefits: string[];
  additionalBenefits: string[];
}
