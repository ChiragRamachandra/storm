import React from 'react';
import { ItemProp } from '@/app/data/itemsData';
import { TableHead } from './components/TableHead';
import { TableRow } from './components/TableRow';

type Props = {
	itemsDataFetched: ItemProp[] | null;
	setSelectedItem: (item: any) => void;
	openModal: () => void;
};

const Table = ({ itemsDataFetched, setSelectedItem, openModal }: Props) => {
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
					{itemsDataFetched?.map((item) => (
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
								openModal();
							}}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
