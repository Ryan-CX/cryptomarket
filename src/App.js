import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {
	Navbar,
	Exchanges,
	Homepage,
	Cryptocurrencies,
	CryptoDetails,
	News,
} from './components';

import './App.css';

const App = () => {
	return (
		<div>
			<div className='navbar'>
				<Navbar />
			</div>

			<div className='main'>
				{/* implement the routing below using react-router-dom */}
				<Layout>
					<div className='routes'>
						<Switch>
							<Route exact path='/'>
								<Homepage />
							</Route>
							<Route exact path='/exchanges'>
								<Exchanges />
							</Route>
							<Route exact path='/cryptocurrencies'>
								<Cryptocurrencies />
							</Route>
							<Route exact path='/crypto/:coinId'>
								<CryptoDetails />
							</Route>
							<Route exact path='/news'>
								<News />
							</Route>
						</Switch>
					</div>
				</Layout>

				<div className='footer'>
					<Typography.Title
						level={5}
						style={{ color: 'white', textAlign: 'center' }}
					>
						Copyright © 2021 CryptoMarket
						<br /> All rights reserved.
					</Typography.Title>
					<Space>
						<Link to='/'>Home</Link>
						<Link to='/Exchanges'>Exchanges</Link>
						<Link to='/Cryptocurrencies'>Cryptocurrencies</Link>
						<Link to='/News'>News</Link>
					</Space>
				</div>
			</div>
		</div>
	);
};

export default App;
