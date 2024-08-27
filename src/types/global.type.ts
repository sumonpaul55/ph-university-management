import { BaseQueryApi } from "@reduxjs/toolkit/query";

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
  message?: string;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  success?: boolean;
  message?: string;
};

export type TresponseWithQuery<T> = TResponse<T> & BaseQueryApi;

export type TQueryParams = { name: string; value: boolean | React.Key };
