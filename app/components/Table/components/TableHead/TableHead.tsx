import React from 'react';

type Props = {
	id: string;
	status: string;
	quantity: string;
	productName: string;
	price: string;
};

const TableHead = (props: Props) => {
	return (
		<thead data-testid='table-head'>
			<tr className='bg-gray-200 text-center'>
				<th className='hidden lg:table-cell py-4 px-2 w-1/6'>{props.id}</th>
				<th className='hidden lg:table-cell py-4 px-2 w-1/6'>{props.status}</th>
				<th className='hidden lg:table-cell py-4 px-2 w-1/6'>
					{props.quantity}
				</th>
				<th className='py-4 px-2'>{props.productName}</th>
				<th className='hidden lg:table-cell py-4 px-2 w-1/6'>{props.price}</th>
			</tr>
		</thead>
	);
};

export default TableHead;
