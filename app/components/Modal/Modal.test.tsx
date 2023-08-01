import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';
import { useItems } from '@/app/hooks/useItems';

jest.mock('../../hooks/useItems', () => ({
	useItems: jest.fn(() => ({
		modalOpen: false, // Initialize modalOpen to false in the mock
		setModalOpen: jest.fn(),
		selectedItem: {
			product: 'Macbook Pro 16 inch (2020 ) For Sale',
			serial: 'BA9212320',
			id: 1374,
			quantity: 122,
			total: 854.08,
		},
	})),
}));

describe('Modal Component', () => {
	it('does not render anything when modalOpen is false', () => {
		const { container } = render(<Modal />);
		expect(container.firstChild).toBeNull();
	});

	it('renders correctly when modalOpen is true', () => {
		useItems.mockReturnValueOnce({
			modalOpen: true,
			setModalOpen: jest.fn(),
			selectedItem: {
				product: 'Test Product',
			},
		});

		const { getByTestId, getByText } = render(<Modal />);

		const modalElement = getByTestId('storm-modal');
		expect(modalElement).toBeInTheDocument();

		const productNameElement = getByText('Test Product');
		expect(productNameElement).toBeInTheDocument();
	});

	it('calls setModalOpen correctly when Close button is clicked', () => {
		const mockSetModalOpen = jest.fn();
		useItems.mockReturnValueOnce({
			modalOpen: true,
			setModalOpen: mockSetModalOpen,
			selectedItem: {
				product: 'Test Product',
			},
		});

		const { getByTestId } = render(<Modal />);

		const closeButton = getByTestId('close-button');
		fireEvent.click(closeButton);

		expect(mockSetModalOpen).toHaveBeenCalledWith(false);
	});
});
