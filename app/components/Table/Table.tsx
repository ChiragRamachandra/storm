import React from 'react';
import { ItemProp } from '@/app/data/itemsData';
import { TableHead } from './components/TableHead';
import { TableRow } from './components/TableRow';

type Props = {
	itemsDataFetched: ItemProp[] | null;
};

const Table = ({ itemsDataFetched }: Props) => {
	return (
		<div className='bg-white shadow-md rounded my-4 overflow-x-auto'>
			<table className='w-full table-fixed'>
				<TableHead
					id={'ID'}
					status={'Status'}
					quantity={'Quantity'}
					productName={'Product Name'}
					price={'Price'}
				/>
				<tbody>
					{itemsDataFetched?.map((item) => (
						<TableRow
							key={item.id}
							id={item.id}
							status={'Status'}
							quantity={item.quantity}
							productName={item.product}
							price={item.total}
							serial={item.serial}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
