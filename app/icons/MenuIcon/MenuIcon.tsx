import React from 'react';

type Props = {};

const MenuIcon = (props: Props) => {
	return (
		<div data-testid='menu-icon'>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M21 7V5H3.023V7H21ZM3 11H21V13H3V11ZM3 17H21V19H3V17Z'
					fill='#707070'
				/>
			</svg>
		</div>
	);
};

export default MenuIcon;
