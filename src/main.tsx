import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import history from './history';
import Routes from './routes';
import '../sass/index.scss';

/*
Top-level Hierarchy:
main.tsx -> routes.tsx
*/
ReactDOM.render(
	<Router history={history}>
		<Routes />
	</Router>,
	document.getElementById('app'),
);
