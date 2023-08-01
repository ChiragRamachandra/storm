// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';

import Header from './Header';

describe('Header Component', () => {
	beforeEach(() => {
		render(<Header />);
	});

	it('renders the header component', () => {
		expect(screen.getByText('Adriana Arias')).toBeInTheDocument();
	});

	it('clicking the open menu button toggles the mobile menu', () => {
		const openMenuButton = screen.getByTestId('mobile-open-menu');
		const isMobileView = window.innerWidth < 400;

		if (isMobileView) {
			expect(screen.getByTestId('mobile-menu-dropdown')).not.toBeVisible();
			fireEvent.click(openMenuButton);
			expect(screen.getByTestId('mobile-menu-dropdown')).toBeVisible();
			fireEvent.click(openMenuButton);
			expect(screen.getByTestId('mobile-menu-dropdown')).not.toBeVisible();
		} else {
			expect(
				screen.queryByTestId('mobile-menu-dropdown')
			).not.toBeInTheDocument();
		}
	});
});
