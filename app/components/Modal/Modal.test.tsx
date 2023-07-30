import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';

describe('Modal Component', () => {
	test('Modal is not rendered when showModal prop is false', () => {
		const closeModalMock = jest.fn();
		const { queryByTestId } = render(
			<Modal
				showModal={false}
				closeModal={closeModalMock}
				selectedItem={null}
			/>
		);
		const modalElement = queryByTestId('storm-modal');
		expect(modalElement).toBeNull();
	});
});
