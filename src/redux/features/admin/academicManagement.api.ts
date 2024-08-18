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
      query: () => {
        return {
          url: "/academic-semister",
          method: "GET",
        };
      },
      transformResponse: (Response: any) => {
        return Response.data;
      },
    }),
  }),
});
export const { useGetAllSemistersQuery, useCreateAcademicSemisterMutation } = academicManagementApi;
