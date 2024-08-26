type TacademicSemister = {
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  _id?: string;
};

export type TRegisterTableData = {
  academicSemister: TacademicSemister;
  status: string;
  startDate: Date;
  endDate: Date;
};
