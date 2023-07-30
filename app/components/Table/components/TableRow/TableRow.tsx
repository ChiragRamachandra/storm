import React from 'react';

type Props = {
	id: number;
	status: string;
	quantity: number;
	productName: string;
	price: number;
	serial: string;
	onClick: () => void;
};

const TableRow = (props: Props) => {
	return (
		<tr
			onClick={props.onClick}
			data-testid={`table-row-${props.id}`}
			className='border-b'
		>
			<td className='hidden lg:table-cell py-2 px-2 text-center'>{props.id}</td>
			{/* //Since there is no status coming from the data file */}
			<td className='hidden lg:table-cell py-2 px-2 text-center'>
				{props.status}
			</td>
			<td className='hidden lg:table-cell py-2 px-2 text-center'>
				{props.quantity}
			</td>
			<td className='py-2 px-2'>
				{props.productName} - {props.serial}
			</td>

			<td className='hidden lg:table-cell py-2 px-2 text-center'>
				&#36;{`${props.price}`}
			</td>
		</tr>
	);
};

export default TableRow;
