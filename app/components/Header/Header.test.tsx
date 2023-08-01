// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
	beforeEach(() => {
		render(<Header />);
	});
	it('renders the header component', () => {
		expect(screen.getByText('Adriana Arias')).toBeInTheDocument();
		expect(screen.getAllByTestId('search-bar')).toBeInTheDocument();
	});
});

// to toggle mobile menu
