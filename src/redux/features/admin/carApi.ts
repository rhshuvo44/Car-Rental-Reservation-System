import { baseApi } from "../../api/api";


const carApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCar: builder.query({
            query: () => ({
                url: '/cars',
                method: 'GET',
            }),
        }),
        createCar: builder.mutation({
            query: (bookingData) => ({
                url: '/cars',
                method: 'POST',
                body: bookingData,
            }),
        }),
    }),
})



export const { useGetAllCarQuery } = carApi;