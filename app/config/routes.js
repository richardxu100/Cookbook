import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import RecipeContainer from '../containers/RecipeContainer';
import MainLayout from '../containers/MainLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../styles/muiTheme';

const routes = (
	<MuiThemeProvider muiTheme={muiTheme}>
		<Router history={browserHistory}>
			<Route path="/" component={MainLayout}>
				<IndexRoute component={RecipeContainer} />
			</Route>
		</Router>
	</MuiThemeProvider>
)

export default routes;
