/* eslint-disable @next/next/no-img-element */
'use client';
import { useItems } from '@/app/hooks/useItems';
import { CloseIcon } from '@/app/icons/CloseIcon';
import React from 'react';

interface ModalProps {}

const Modal = (props: ModalProps) => {
	const { modalOpen, setModalOpen, selectedItem } = useItems();

	if (!modalOpen) {
		return null;
	}

	return (
		<div
			data-testid='storm-modal'
			className='fixed inset-0 flex justify-center md:items-center items-end bg-black bg-opacity-50'
		>
			<div className='bg-white md:rounded-lg p-4 max-2w'>
				{/* Modal Header */}
				<div className='flex flex-row justify-between items-center md:my-8 mt-8 '>
					<div className='flex flex-row justify-start items-center w-4/5 ml-8'>
						<h2 className='text-lg md:text-2xl font-bold '>
							{selectedItem?.product}
						</h2>
					</div>
					<div className='flex flex-row justify-end  w-1/5 mr-2 md:mr-6'>
						<button onClick={() => setModalOpen(false)}>
							<CloseIcon />
						</button>
					</div>
				</div>
				{/* Modal Body */}
				<div className='flex flex-col md:flex-row items-center justify-center mb-4 mx-6 '>
					<div>
						<img src='/images/laptop.png' alt='amazing laptop' />
					</div>
					<div>
						<h4 className='font-semibold text-lg md:text-xl mb-2'>
							Key Features
						</h4>
						<ul className='list-disc pl-4 text-sm md:text-base'>
							<li>2.6 GHz Intel Core i7 6-Core (9th Gen)</li>
							<li> 16GB of 2666 MHz DDR4 RAM | 8TB SSD</li>
							<li> 16&#34; 3072 x 1920 Retina Display</li>
							<li> AMD Radeon Pro 5600M GPU (8GB HBM2)</li>
						</ul>
						<p className='justify-center max-w-md mt-2 text-sm md:text-base'>
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
						data-testid='close-button'
						className='bg-[#F9F9FB] text-black px-4 py-2 rounded mb-4 mr-6 w-full md:hidden'
						onClick={() => setModalOpen(false)}
					>
						Close
					</button>
					<button
						className='bg-[#F9F9FB] text-black px-6 py-2 rounded mr-6 mb-8 hidden md:block'
						onClick={() => setModalOpen(false)}
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
