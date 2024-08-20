import { baseApi } from "../../api/baseApi";

const uaseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudents: builder.mutation({
      query: (data) => {
        return {
          url: "/users/create-student",
          method: "POST",
          body: data,
          formData: true,
        };
      },
    }),
  }),
});

export const { useAddStudentsMutation } = uaseManagementApi;
