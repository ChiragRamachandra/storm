'use client';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Table } from './components/Table';
import { Modal } from './components/Modal';
import { itemsData, ItemProp } from './data/itemsData';

export default function Home() {
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [itemsDataFetched, setItemsDataFetched] = useState<ItemProp[] | null>(
		null
	);
	const [selectedItem, setSelectedItem] = useState<any>(null);

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	useEffect(() => {
		//API call would happen here
		setItemsDataFetched(itemsData);
	}, [itemsDataFetched]);

	return (
		<>
			<Header />
			<main className='flex min-h-screen flex-col items-center'>
				<div className=' flex flex-col w-5/6 justify-start items-start'>
					<div>
						Products{' '}
						<span className='ml-1'>{`10 out of ${itemsDataFetched?.length} results`}</span>
					</div>
				</div>
				<Modal
					showModal={modalOpen}
					closeModal={handleCloseModal}
					selectedItem={selectedItem}
				/>

				<Table
					setSelectedItem={setSelectedItem}
					itemsDataFetched={itemsDataFetched}
					openModal={handleOpenModal}
				/>
			</main>
		</>
	);
}
