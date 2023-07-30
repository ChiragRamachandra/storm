/* eslint-disable @next/next/no-img-element */
'use client';
import { useItems } from '@/app/hooks/useItems';
import { CloseIcon } from '@/app/icons/CloseIcon';
import React from 'react';

interface ModalProps {}

const Modal = (props: ModalProps) => {
	const {
		modalOpen,
		setModalOpen,
		itemsDataFetched,
		setItemsDataFetched,
		selectedItem,
		setSelectedItem,
	} = useItems();

	if (!modalOpen) {
		return null;
	}

	return (
		<div
			data-testid='storm-modal'
			className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'
		>
			<div className='bg-white rounded-lg p-4 max-2w'>
				{/* Modal Header */}
				<div className='flex flex-row justify-between items-center my-4'>
					<div className='flex flex-row justify-center items-center w-4/5'>
						<h2 className='text-2xl'>{selectedItem?.product}</h2>
					</div>
					<div className='flex flex-row justify-end  w-1/5'>
						<button onClick={() => setModalOpen(false)}>
							<CloseIcon />
						</button>
					</div>
				</div>
				{/* Modal Body */}
				<div className='flex flex-col md:flex-row items-center justify-center mb-4'>
					<div>
						<img src='/images/laptop.png' alt='amazing laptop' />
					</div>
					<div>
						<h4>Key Features</h4>
						<ul>
							<li>2.6 GHz Intel Core i7 6-Core (9th Gen)</li>
							<li> 16GB of 2666 MHz DDR4 RAM | 8TB SSD</li>
							<li> 16&#34; 3072 x 1920 Retina Display</li>
							<li> AMD Radeon Pro 5600M GPU (8GB HBM2)</li>
						</ul>
						<p className='justify-center max-w-md'>
							The Apple 16&#34; MacBook Pro features a 16&#34; Retina Display, a
							Magic Keyboard with a redesigned scissor mechanism, a six-speaker
							high-fidelity sound system, and an advanced thermal design. This
							MacBook Pro also features an AMD Radeon Pro 5600M graphics card, a
							7nm mobile discrete GPU designed for pro users. With 8GB of HBM2
						</p>
					</div>
					<p></p>
				</div>
				{/* Modal Footer */}
				<div className='flex flex-row justify-end'>
					<button
						className='bg-[#F9F9FB] text-black px-4 py-2 rounded'
						onClick={() => setModalOpen(false)}
					>
						Close Modal
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
