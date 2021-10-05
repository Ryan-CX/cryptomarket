import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';

//for reducer we need to specify the following:
export default configureStore({
	reducer: {
		[cryptoApi.reducerPath]: cryptoApi.reducer,
	},
});
