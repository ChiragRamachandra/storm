import React from 'react';

type Props = {
	backgroundColor: string;
	textColor: string;
	buttonValue: string;
};

const StatusButton = (props: Props) => {
	return (
		<button
			data-testid='status-button'
			className={`inline-block rounded-full  border  px-6 py-2 text-sm font-medium  bg-[#${props.backgroundColor}] text-[#${props.textColor}] `}
		>
			{props.buttonValue}
		</button>
	);
};

export default StatusButton;

//renders
