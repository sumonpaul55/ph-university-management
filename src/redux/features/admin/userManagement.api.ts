import { baseApi } from "../../api/baseApi";

const uaseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudents: builder.mutation({
      query: (data) => {
        return {
          url: "/users/create-student",
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data;",
          },
          body: data,
          formData: true,
        };
      },
    }),
  }),
});

export const { useAddStudentsMutation } = uaseManagementApi;
