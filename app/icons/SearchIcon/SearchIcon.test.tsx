// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchIcon from './SearchIcon';

test('renders the SearchIcon', () => {
	render(<SearchIcon />);
	const SearchIconGrab = screen.getByTestId('search-icon');
	expect(SearchIconGrab).toBeInTheDocument();
});
