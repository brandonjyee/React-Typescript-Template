import * as React from 'react';

function Sidebar(props: any) {
	return <div className='sidebar'>
		{props.children}
	</div>;
}

export default Sidebar;
