import {
    BaseQueryApi,
    BaseQueryFn, createApi, DefinitionType,
    FetchArgs, fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://car-rental-reservation-system-khaki.vercel.app/api',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers;
    },
});

const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
    let result: any = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 404) {
        toast.error(result?.error?.data?.message);
    }
    if (result?.error?.status === 403) {
        toast.error(result?.error?.data?.message)
    }
    if (result?.error?.status === 401 || (result?.error?.status === 500 && result?.error?.data?.err?.name === 'TokenExpiredError')) {
        //* Send Refresh
        console.log('Sending refresh token');

        const res = await fetch('https://car-rental-reservation-system-khaki.vercel.app/api/auth/refresh-token', {
            method: 'POST',
            credentials: 'include',
        });
        const data = await res.json();

        if (data?.data) {
            const user = (api.getState() as RootState).auth.user;
            api.dispatch(
                setUser({
                    user,
                    token: data?.data,
                })
            );
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: ['Travelling', 'Utility', 'Employee', 'loan', 'Miscellaneous', 'Collection', 'Buyer Development', 'Factory', 'User', "Loan", "fixedCost", "production"],
    endpoints: () => ({}),
});