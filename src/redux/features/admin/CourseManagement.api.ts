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
      invalidatesTags: ["semisterRegistration"],
    }),
    getRegisteredSemister: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/semister-registration",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["semisterRegistration"],
    }),
    updateStatuse: builder.mutation({
      query: (args) => {
        return {
          url: `/semister-registration/${args.id}`,
          method: "PATCH",
          body: args.body,
        };
      },
      invalidatesTags: ["semisterRegistration"],
    }),
  }),
});

export const { useAddRegisterSemisterMutation, useGetRegisteredSemisterQuery, useUpdateStatuseMutation } = courseManagementApi;
