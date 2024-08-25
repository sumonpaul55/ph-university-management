export interface TacademicSemisterData {
  _id: string;
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  message?: string;
  __v: number;
}

export interface TDepartmentResponse {
  _id: string;
  name: string;
  academicFaculty: string;
  updatedAt: string;
  message?: string;
  __v: number;
}
export type CreateSemisteRegistration = {
  academicSemister: string;
  status: string;
  startDate: string;
  endDate: string;
  minCreadit: number;
  maxCreadit: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  message?: string;
};
