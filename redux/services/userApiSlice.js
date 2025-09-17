import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/`,
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        findUser: builder.query({
            query: (phone) => `find-user/${phone}`,
        }),

        createUser: builder.mutation({
            query: (user) => ({
                url: 'create-user',
                method: 'POST',

                body: { ...user },
            }),
        }),
        sendOtp: builder.mutation({
            query: (phone) => ({
                url: 'generate-otp',
                method: 'POST',
                body: { phone },
            }),
        }),
        verifyOtp: builder.mutation({
            query: ({ phone, otp }) => ({
                url: 'verify-otp',
                method: 'POST',
                body: { phone, otp },
            }),
        }),
        resendOtp: builder.mutation({
            query: (phone) => ({
                url: 'resend-otp',
                method: 'POST',
                body: { phone },
            }),
        }),
    }),
})

export const { useFindUserQuery, useSendOtpMutation, useVerifyOtpMutation, useResendOtpMutation, useCreateUserMutation } = userApi
