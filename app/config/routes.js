import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import RecipeContainer from '../containers/RecipeContainer';
import Login from '../containers/Login';
import Register from '../containers/Register';
import MainLayout from '../containers/MainLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../styles/muiTheme';
import recipeStore from '../stores/RecipeStore';
import userStore from '../stores/UserStore';
import { Provider } from 'mobx-react';

const routes = (
	<Provider recipeStore={recipeStore} userStore={userStore}>
		<MuiThemeProvider muiTheme={muiTheme}>
			<Router history={browserHistory}>
				<Route path="/" component={MainLayout}>
					<IndexRoute component={RecipeContainer} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Route>
			</Router>
		</MuiThemeProvider>
	</Provider>
)

export default routes;
