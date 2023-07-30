// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CloseIcon from './CloseIcon';

test('renders the CloseIcon', () => {
	render(<CloseIcon />);
	const CloseIconGrab = screen.getByTestId('close-icon');
	expect(CloseIconGrab).toBeInTheDocument();
});
