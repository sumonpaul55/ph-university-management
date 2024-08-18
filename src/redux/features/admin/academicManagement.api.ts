import { TresponseWithQuery } from "../../../types";
import { TacademicSemisterData } from "../../../types/academicSemister.type";
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
  }),
});
export const { useGetAllSemistersQuery, useCreateAcademicSemisterMutation } = academicManagementApi;
