import { baseApi } from "../../api/api";


const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBookings: builder.query({
            query: () => ({
                url: '/bookings',
                method: 'GET',
            }),
        }),
        createBookings: builder.mutation({
            query: (bookingData) => ({
                url: '/bookings',
                method: 'POST',
                body: bookingData,
            }),
        }),
    }),
})



export const { useGetAllBookingsQuery, useCreateBookingsMutation } = bookingApi;