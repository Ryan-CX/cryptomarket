import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux'; // Provider is a component that allows us to pass the store to all of our components

import 'antd/dist/antd.css';
import store from './app/store'; // store is the redux store

ReactDOM.render(
	<Router>
		{/* By wrapping App inside the Provider, every component inside App can access {store}  */}
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('root')
);
