import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const notificationsApi = createApi({
    reducerPath: 'notificationsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/notification/`,
        credentials: 'include', // backend port
    }),
    tagTypes: ['Notifications'],
    endpoints: (builder) => ({
        getNotifications: builder.query({
            query: (classId) => `/by-class?classId=${classId}`,
            providesTags: ['Notifications'],
        }),
        markAsRead: builder.mutation({
            query: (updates) => ({
                url: `/mark-as-read`,
                method: 'PATCH',
                body: {...updates},
            }),
            invalidatesTags: ['Notifications'],
        }),
        markAllAsRead: builder.mutation({
            query: (updates) => ({
                url: `/mark-all-as-read`,
                method: 'PATCH',
                body: {...updates},
            }),
            invalidatesTags: ['Notifications'],
        }),
    }),
})

export const {
    useGetNotificationsQuery,
    useMarkAsReadMutation,
    useMarkAllAsReadMutation,
} = notificationsApi
