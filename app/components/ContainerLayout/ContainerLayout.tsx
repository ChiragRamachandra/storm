'use client';
import React from 'react';
import { useEffect } from 'react';
import { Header } from '../Header';
import { Table } from '../Table';
import { Modal } from '../Modal';
import { itemsData } from '../../data/itemsData';
import { useItems } from '@/app/hooks/useItems';

type Props = {};

const ContainerLayout = (props: Props) => {
	const { setItemsDataFetched, itemsDataFiltered, setItemsDataFiltered } =
		useItems();

	useEffect(() => {
		//API call would happen here
		setItemsDataFetched(itemsData);
		setItemsDataFiltered(itemsData);
	}, [setItemsDataFetched, setItemsDataFiltered]);

	return (
		<>
			<Header />
			<main className='flex min-h-screen flex-col items-center'>
				<div className=' flex flex-col w-5/6 justify-start items-start'>
					<div>
						<span className='font-bold'>Products </span>
						<span className='ml-1 font-light'>{`10 out of ${itemsDataFiltered?.length} results`}</span>
					</div>
				</div>
				<Modal />

				<Table />
			</main>
		</>
	);
};
export default ContainerLayout;
