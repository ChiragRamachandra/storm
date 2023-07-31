import React from 'react';

type Props = {};

const CarrotDownIcon = (props: Props) => {
	return (
		<div data-testid='carrot-down-icon'>
			<svg
				width='20'
				height='20'
				viewBox='0 0 20 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M5 7.5L10 12.5L15 7.5'
					stroke='#1A1A1A'
					strokeWidth='1.8'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	);
};

export default CarrotDownIcon;
