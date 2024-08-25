import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AddRegisterSemister: builder.mutation({
      query: (data) => {
        return {
          url: "/semister-registration/create-semister-ragistration",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useAddRegisterSemisterMutation } = courseManagementApi;
