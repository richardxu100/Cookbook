import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';

const routes = (
	<Router>
		<Route history={browserHistory}>
			<IndexRoute component={AppContainer} />
		</Route>
	</Router>
) 

export default routes;