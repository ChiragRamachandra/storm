import { CarrotDownIcon } from '@/app/icons/CarrotDownIcon';
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
			<tr className='font-bold text-center border'>
				<th className='hidden lg:table-cell py-4 px-2 w-1/6'>{props.id}</th>
				<th className='hidden lg:table-cell py-4 px-2 w-1/6'>{props.status}</th>
				<th className='hidden lg:table-cell py-4 px-2 w-1/6'>
					{props.quantity}
				</th>
				<th className='py-4 px-2'>{props.productName}</th>
				<th className='hidden lg:table-cell py-4 px-2 w-1/6 border'>
					<div className='flex flex-row justify-center items-center'>
						<div>{props.price}</div>
						{/* // not sorting as it was not mentioned in the task */}
						<div className='ml-4'>
							<CarrotDownIcon />
						</div>
					</div>
				</th>
			</tr>
		</thead>
	);
};

export default TableHead;
