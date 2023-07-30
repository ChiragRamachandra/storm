import React from 'react';
import { ItemProp } from '@/app/data/itemsData';
import { TableHead } from './components/TableHead';
import { TableRow } from './components/TableRow';
import { useItems } from '@/app/hooks/useItems';

type Props = {};

const Table = (props: Props) => {
	const { setModalOpen, itemsDataFetched, setSelectedItem } = useItems();

	return (
		<div className='bg-white rounded my-4 overflow-x-auto flex flex-col items-center justify-center'>
			<table className='w-5/6 table-fixed'>
				<TableHead
					id={'ID'}
					status={'Status'}
					quantity={'Quantity'}
					productName={'Product Name'}
					price={'Price'}
				/>
				<tbody>
					{itemsDataFetched?.map((item: ItemProp) => (
						<TableRow
							key={item.id}
							id={item.id}
							status={'Status'}
							quantity={item.quantity}
							productName={item.product}
							price={item.total}
							serial={item.serial}
							onClick={() => {
								setSelectedItem(item);
								setModalOpen(true);
							}}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
