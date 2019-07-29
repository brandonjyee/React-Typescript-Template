import * as React from 'react';
import {Link} from 'react-router-dom';

interface CardProperty {
	title: string;
	values: string[];
}

interface Props {
	title: React.ReactNode;
	subtitle?: React.ReactNode;
	tag?: string;
	properties?: CardProperty[]; // { title, values }
	data?: string;
	isBusy?: boolean;
	inactive?: boolean;
	onOpen?: (evt: React.MouseEvent) => void;
}

export default class BigButton extends React.Component<Props, null> {
	public render() {
		return (<div>
			<Link
				className='card-link'
				data-value=''
				to='/'
				onClick={null}
			>
				<div className='card-contents'>
					<div className='card-header'>
						<span>{this.props.title}</span>
					</div>
					<div className='card-properties small-block-grid-6'>
						properties
					</div>
				</div>
			</Link>
		</div>);
	}
}

/*
<div tabindex="0" class="card hoverable" data-reactid="">
	<a class-link data-reactid="">
		<div class="card-contents" data-reactid="">
			<div class="card-header" data-reactid="">
				<span class="card-header-title" data-reactid="">Personal Auto Policy 10000000</span>
				<span class="card-header-item3" data-reactid="">Issued</span>
			</div>
			<div class="card-properties small-block-grid-2" data-reactid="">
			</div>
		</div>
	</a>
</div>
*/
