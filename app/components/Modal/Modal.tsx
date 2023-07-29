'use client';
import React, { useEffect, useState } from 'react';

interface ModalProps {
	showModal: boolean;
	closeModal: () => void;
}

const Modal = ({ showModal, closeModal }: ModalProps) => {
	const [visible, setVisible] = useState<boolean>(showModal);

	useEffect(() => {
		setVisible(showModal);
	}, [showModal]);

	const handleCloseModal = () => {
		setVisible(false);
		closeModal();
	};

	console.log(showModal);

	if (!visible) {
		return null;
	}

	return (
		<div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
			<div className='bg-white rounded-lg p-4 max-3w-md'>
				<div className='flex items-center justify-center mb-4'>
					{/* image comes here */}
					<div>Modal Image</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						sagittis justo ac risus bibendum, eget tincidunt purus laoreet.
						Vestibulum sit amet risus eu enim vulputate scelerisque.
					</p>
				</div>
				<button
					className='bg-black text-white px-4 py-2 rounded'
					onClick={handleCloseModal}
				>
					Close Modal
				</button>
			</div>
		</div>
	);
};

export default Modal;
