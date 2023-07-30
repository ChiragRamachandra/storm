import { useItems } from '@/app/hooks/useItems';
import React from 'react';

type Props = {
	id: number;
	status: string;
	quantity: number;
	productName: string;
	price: number;
	serial: string;
	onClick: () => void;
	onSelect: () => void;
};

const TableRow = (props: Props) => {
	const { multiSelectItems } = useItems();
	return (
		<tr
			className={`cursor-pointer border ${
				multiSelectItems.includes(props.id) ? 'bg-blue-200' : ''
			}`}
			data-testid={`table-row-${props.id}`}
		>
			<td
				onClick={() => props.onSelect()}
				className='hidden lg:table-cell py-2 px-2 text-center'
			>
				{props.id}
			</td>
			{/* //Since there is no status coming from the data file */}
			<td className='hidden lg:table-cell py-2 px-2 text-center'>
				{props.status}
			</td>
			<td className='hidden lg:table-cell py-2 px-2 text-center'>
				{props.quantity}
			</td>
			<td onClick={props.onClick} className='py-2 px-2 cursor-pointer'>
				{props.productName} - {props.serial}
			</td>

			<td className='hidden lg:table-cell py-2 px-2 text-center'>
				&#36;{`${props.price}`}
			</td>
		</tr>
	);
};

export default TableRow;
