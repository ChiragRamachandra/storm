import React from 'react';
import { ItemProp } from '@/app/data/itemsData';
import { TableHead } from './components/TableHead';
import { TableRow } from './components/TableRow';
import { useItems } from '@/app/hooks/useItems';

type Props = {};

const Table = (props: Props) => {
	const {
		setModalOpen,
		itemsDataFiltered,
		setSelectedItem,
		multiSelectItems,
		setMultiSelectItems,
	} = useItems();

	const handleRowClick = (itemId: number) => {
		setMultiSelectItems((prevSelected: any) =>
			prevSelected.includes(itemId)
				? prevSelected.filter((id: any) => id !== itemId)
				: [...prevSelected, itemId]
		);
	};

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
					{itemsDataFiltered?.map((item: ItemProp) => (
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
							onSelect={() => handleRowClick(item.id)}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
