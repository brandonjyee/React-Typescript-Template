import * as React from 'react';

function TopNav(props: any) {
	return <div className='top-nav'>
		{props.children}
	</div>;
}

export default TopNav;
