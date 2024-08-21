import { TresponseWithQuery } from "../../../types";
import { TacademicSemisterData } from "../../../types/academicManagement.type";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAcademicSemister: builder.mutation({
      query: (data) => {
        return {
          url: "/academic-semister/create-academic-semister",
          method: "POST",
          body: data,
        };
      },
    }),
    getAllSemisters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((items: { name: string; value: string }) => params.append(items.name, items.value));
        }
        return {
          url: "/academic-semister",
          method: "GET",
          params,
        };
      },
      transformResponse: (Response: TresponseWithQuery<TacademicSemisterData[]>) => {
        return Response.data;
      },
    }),
    // academic faculty
    createAcademicFaculty: builder.mutation({
      query: (data) => {
        return {
          url: "/academic-faculty/create-faculty",
          method: "POST",
          body: data,
        };
      },
    }),
    getAcademicFaculty: builder.query({
      query: () => {
        return {
          url: "/academic-faculty",
          method: "GET",
        };
      },
    }),
    // academic departmnet
    createAcademicDepartment: builder.mutation({
      query: (data) => {
        return {
          url: "/academic-department/create-department",
          method: "POST",
          body: data,
        };
      },
    }),
    getAcademicDepartment: builder.query({
      query: () => {
        return {
          url: "/academic-department",
          method: "GET",
        };
      },
    }),
  }),
});
export const {
  useGetAllSemistersQuery,
  useCreateAcademicSemisterMutation,
  useCreateAcademicFacultyMutation,
  useGetAcademicFacultyQuery,
  useCreateAcademicDepartmentMutation,
  useGetAcademicDepartmentQuery,
} = academicManagementApi;
