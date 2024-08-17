import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemisters: builder.query({
      query: () => {
        return {
          url: "/academic-semister",
          method: "GET",
        };
      },
    }),
    createAcademicSemister: builder.mutation({
      query: (data) => {
        return {
          url: "/academic-semister/create-academic-semister",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});
export const { useGetAllSemistersQuery, useCreateAcademicSemisterMutation } = academicManagementApi;
