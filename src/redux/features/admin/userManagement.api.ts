import { baseApi } from "../../api/baseApi";
import { TresponseWithQuery, TStudentResponse } from "../../../types";

const uaseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudents: builder.mutation({
      query: (data) => {
        return {
          url: "/users/create-student",
          method: "POST",
          body: data,
        };
      },
    }),
    getAllStudent: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/students",
          method: "GET",
          params,
        };
      },
      transformResponse: (Response: TresponseWithQuery<TStudentResponse>) => {
        return { data: Response?.data?.result, meta: Response?.data?.meta };
      },
    }),
  }),
});

export const { useAddStudentsMutation, useGetAllStudentQuery } = uaseManagementApi;
