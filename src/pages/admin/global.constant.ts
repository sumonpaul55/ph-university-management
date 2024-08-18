export const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const monthOptions = allMonths.map((month) => {
  return { value: month, label: month };
});

export type TError = {
  data: {
    stack: string;
    message: string;
    success: boolean;
  };
  status?: number;
};

export type TRsponse = {
  data?: any;
  error?: TError;
};
