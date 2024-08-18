import { baseApi } from "../../api/baseApi";

const uaseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudents: builder.mutation({
      query: (data) => {
        return {
          url: "",
          body: data,
        };
      },
    }),
  }),
});
