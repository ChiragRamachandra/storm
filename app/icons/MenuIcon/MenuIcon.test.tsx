// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MenuIcon from './MenuIcon';

test('renders the MenuIcon', () => {
	render(<MenuIcon />);
	const MenuIconGrab = screen.getByTestId('menu-icon');
	expect(MenuIconGrab).toBeInTheDocument();
});
