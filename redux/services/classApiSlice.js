import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const classApi = createApi({
    reducerPath: 'classApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/class/`,
    }),
    endpoints: (builder) => ({
        getAllClass: builder.query({
            query: (phone) => `all`,
        }),
    }),
})

export const {useGetAllClassQuery} = classApi
