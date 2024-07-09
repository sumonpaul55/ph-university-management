import { baseApi } from "../../api/baseApi";

const academiSemisterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemisters: builder.query({
            query: () => ({
                url: "/academic-semister",
                method: "GET",
            })
        })
    })
});

export const { useGetAllSemistersQuery } = academiSemisterApi;