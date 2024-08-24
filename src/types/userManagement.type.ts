export type TStudentData = {
  _id: string;
  id: string;
  user: string;
  name: Name;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup: string;
  presentAddress: string;
  permenentAdress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage: string;
  admissionSemister: AdmissionSemister;
  academicDepartment: AcademicDepartment;
  isDeleted: boolean;
  fullName: string;
};

export type TStudentResponse = {
  result: TStudentData[];
  meta: Tmeta;
};

export type Name = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
  _id: string;
};

export type AdmissionSemister = {
  _id: string;
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type AcademicDepartment = {
  _id: string;
  name: string;
  academicFaculty: AcademicFaculty;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type AcademicFaculty = {
  _id: string;
  name: string;
  __v: number;
};

export interface Tmeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}
