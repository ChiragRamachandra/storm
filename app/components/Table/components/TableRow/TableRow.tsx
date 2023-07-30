import React from 'react';

type Props = {
	id: string;
	status: string;
	quantity: string;
	productName: string;
	price: string;
};

const TableRow = (props: Props) => {
	return (
		<div data-testid={`table-row-${props.id}`}>
			<tr className='border-b'>
				<td className='hidden lg:table-cell py-2 px-2 text-center'>1</td>
				<td className='hidden lg:table-cell py-2 px-2 text-center'>Status</td>
				<td className='hidden lg:table-cell py-2 px-2 text-center'>5</td>
				<td className='py-2 px-2'>Macbook Pro 1</td>
				<td className='hidden lg:table-cell py-2 px-2 text-center'>$854.08</td>
			</tr>
		</div>
	);
};

export default TableRow;
