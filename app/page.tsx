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
	const [selectedItem, setSelectedItem] = useState<ItemProp | null>(null);

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	useEffect(() => {
		//API call would happen here
		setItemsDataFetched(itemsData);
	}, [itemsDataFetched]);

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<Header />
			<main className='flex min-h-screen flex-col items-center'>
				<div className=' flex flex-col items-start'>
					<div className=' '>
						Products <span className='ml-2'>10 out of 64 results</span>
					</div>
				</div>

				<Table itemsDataFetched={itemsDataFetched} />

				<button
					className='bg-blue-500 text-white px-4 py-2 rounded'
					onClick={handleOpenModal}
				>
					Open Modal
				</button>
				<Modal showModal={modalOpen} closeModal={handleCloseModal} />
			</main>
		</>
	);
}
