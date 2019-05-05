import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';
import '../sass/index.scss';

ReactDOM.render(
	<div>
		<div className='test-style'><Hello msg='world!!' /></div>
		<div className='test-style'><Hello msg='world2' /></div>
	</div>,
	document.getElementById('app'),
);
