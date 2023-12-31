import React from 'react';

type Props = {};

const CloseIcon = (props: Props) => {
	return (
		<div data-testid='close-icon'>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M16.2425 6.34399L11.9995 10.586L7.75751 6.34399L6.34351 7.75799L10.5855 12L6.34351 16.242L7.75751 17.656L11.9995 13.414L16.2425 17.656L17.6565 16.242L13.4145 12L17.6565 7.75799L16.2425 6.34399Z'
					fill='#707070'
				/>
			</svg>
		</div>
	);
};

export default CloseIcon;
