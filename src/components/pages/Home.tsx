import * as React from 'react';

import PageLayout from './PageLayout';
// import Hello from '../Hello';
// import BigButton from '../BigButton';

export default function Home(props: any) {
	const renderNav = () => <>Top nav</>;
	const renderSidebar = () => <>Sidebar</>;
	const renderMainContent = () => <>Main Content</>;
	return <>
		{/* <div> */}
		<PageLayout
			renderMainContent={renderMainContent}
			renderNav={renderNav}
			renderSidebar={renderSidebar}
		/>
	</>;
}
