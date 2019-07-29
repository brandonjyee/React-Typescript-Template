import * as React from 'react';

import TopNav from '../TopNav';
import { RenderFn } from '../../util-react';
import Sidebar from '../Sidebar';

interface Props {
	renderMainContent: RenderFn;
	renderNav: RenderFn;
	renderSidebar: RenderFn;
}

function PageLayout(props: Props) {
	const { renderMainContent, renderNav, renderSidebar } = props;
	return <>
		<TopNav>
			{renderNav()}
		</TopNav>
		<div className='layout-main-container'>
			<Sidebar>
				{renderSidebar()}
			</Sidebar>
			<div className='main-content-container'>
				{renderMainContent()}
			</div>
		</div>
	</>;
}

export default PageLayout;
