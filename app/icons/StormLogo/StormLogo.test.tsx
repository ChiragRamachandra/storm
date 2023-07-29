// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StormLogo from './StormLogo';

test('renders the StormLogo', () => {
	render(<StormLogo />);
	const stormLogo = screen.getByTestId('storm-logo');
	expect(stormLogo).toBeInTheDocument();
});
