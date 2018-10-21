import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from '../components/home';
import Index from '../components/main';

const Main = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/food-idea" component={Index} />
			{/* <Route path="*" component={NotFoundPage} /> */}
		</Switch>
	</BrowserRouter>
);

export default Main;
