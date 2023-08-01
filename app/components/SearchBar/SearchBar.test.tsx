import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';
import { useItems } from '../../hooks/useItems';

// Mock the implementation of useItems
jest.mock('../../hooks/useItems', () => ({
	useItems: jest.fn(() => ({
		searchedString: '',
		setSearchedString: jest.fn(),
		setItemsDataFiltered: jest.fn(),
		itemsDataFetched: [],
	})),
}));

describe('Modal Component', () => {
	beforeEach(() => {
		render(<SearchBar />);
	});

	it('renders SearchBar correctly', () => {
		const searchBarElement = screen.getByTestId('search-bar');
		expect(searchBarElement).toBeInTheDocument();
	});

	it('updates inputValue correctly when input value changes', () => {
		const inputElement = screen.getByPlaceholderText('Search');

		fireEvent.change(inputElement, { target: { value: 'test input' } });

		expect(inputElement.value).toBe('test input');
	});
});
