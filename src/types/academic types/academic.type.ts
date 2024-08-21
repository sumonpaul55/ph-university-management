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
