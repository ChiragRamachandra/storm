import { StatusButton } from '@/app/components/StatusButton';
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
			onClick={() => props.onSelect()}
		>
			<td className='hidden lg:table-cell py-2 px-2 text-center'>{props.id}</td>
			<td className='hidden lg:table-cell py-2 px-2 text-center'>
				<StatusButton
					buttonValue={props.status}
					backgroundColor='E4E4EF'
					textColor='605DEC'
				/>
			</td>
			<td className='hidden lg:table-cell py-2 px-2 text-center'>
				{props.quantity}
			</td>
			<td onClick={props.onClick} className='py-2 px-2 cursor-pointer'>
				<div className='flex flex-col'>
					<div>{props.productName}</div>
					<div className='font-thin text-sm flex-row'>
						{props.serial}{' '}
						<span className='md:hidden'>{` - Qty: ${props.quantity}`}</span>
					</div>
				</div>
			</td>

			<td className='hidden lg:table-cell py-2 px-2 text-center border'>
				&#36;{`${props.price}`}
			</td>
		</tr>
	);
};

export default TableRow;
