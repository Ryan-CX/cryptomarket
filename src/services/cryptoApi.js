// logic for crypto api fetching
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Coinranking api snippets

const cryptoApiHeaders = {
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
	'x-rapidapi-key': 'f3a4b48122mshc2ebd183c9a0d33p186e68jsn7fc10498a7ce',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

//we create a new api and use it in the store.js, we also have the getCryptos query and we export that
export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
		getExchanges: builder.query({
			query: () => createRequest('/exchanges'),
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`),
		}),
		getCryptoHistory: builder.query({
			query: ({ coinId, timeperiod }) =>
				createRequest(`coin/${coinId}/history/${timeperiod}`),
		}),
	}),
});

//redux-toolkit query is a function that takes a builder object and returns a query object, and we can get all data from the api with the query object

export const {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetExchangesQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi;
