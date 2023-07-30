import React from 'react';

type Props = {
	id: number;
	status: string;
	quantity: number;
	productName: string;
	price: number;
	serial: string;
};

const TableRow = (props: Props) => {
	return (
		<div data-testid={`table-row-${props.id}`}>
			<tr className='border-b'>
				<td className='hidden lg:table-cell py-2 px-2 text-center'>
					{props.id}
				</td>
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

				{/* should take care of $ symbol */}
				<td className='hidden lg:table-cell py-2 px-2 text-center'>{`${props.price}`}</td>
			</tr>
		</div>
	);
};

export default TableRow;
