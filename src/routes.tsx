import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';

export default class Routes extends React.Component {
	public render() {
		return (
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		);
	}
}
