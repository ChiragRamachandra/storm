// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CarrotDownIcon from './CarrotDownIcon';

test('renders the CarrotDownIcon', () => {
	render(<CarrotDownIcon />);
	const CarrotDownIconGrab = screen.getByTestId('carrot-down-icon');
	expect(CarrotDownIconGrab).toBeInTheDocument();
});
