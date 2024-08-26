type TacademicSemister = {
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
};

export type TRegisterTableData = {
  academicSemister: TacademicSemister;
  status: string;
  startDate: Date;
  endDate: Date;
};
