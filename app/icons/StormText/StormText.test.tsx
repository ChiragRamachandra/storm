// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StormText from './StormText';

test('renders the StormText', () => {
	render(<StormText />);
	const stormTextIcon = screen.getByTestId('storm-text');
	expect(stormTextIcon).toBeInTheDocument();
});
