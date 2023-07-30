'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Table } from '../Table';
import { Modal } from '../Modal';
import { itemsData, ItemProp } from '../../data/itemsData';
import { useItems } from '@/app/hooks/useItems';

type Props = {};

const ContainerLayout = (props: Props) => {
	const {
		modalOpen,
		setModalOpen,
		itemsDataFetched,
		setItemsDataFetched,
		selectedItem,
		setSelectedItem,
	} = useItems();

	useEffect(() => {
		//API call would happen here
		setItemsDataFetched(itemsData);
	}, [itemsDataFetched, setItemsDataFetched]);
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
				<Modal />

				<Table />
			</main>
		</>
	);
};
export default ContainerLayout;
