import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';

describe('Modal Component', () => {
	test('renders correctly when showModal is true', () => {
		const closeModalMock = jest.fn();

		render(<Modal showModal={true} closeModal={closeModalMock} />);

		// Assert that the modal content is visible
		expect(screen.getByText(/Lorem ipsum dolor/)).toBeInTheDocument();
		expect(screen.getByText('Close Modal')).toBeInTheDocument();
	});

	test('does not render when showModal is false', () => {
		const closeModalMock = jest.fn();

		render(<Modal showModal={false} closeModal={closeModalMock} />);

		// Assert that the modal content is not visible
		expect(screen.queryByText(/Lorem ipsum dolor/)).toBeNull();
		expect(screen.queryByText('Close Modal')).toBeNull();
	});

	test('calls closeModal function when Close Modal button is clicked', () => {
		const closeModalMock = jest.fn();

		render(<Modal showModal={true} closeModal={closeModalMock} />);

		// Simulate clicking the Close Modal button
		const closeButton = screen.getByText('Close Modal');
		fireEvent.click(closeButton);

		// Assert that the closeModal function is called
		expect(closeModalMock).toHaveBeenCalledTimes(1);
	});
});
