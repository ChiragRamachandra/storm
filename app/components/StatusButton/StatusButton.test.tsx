// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StatusButton from './StatusButton';

test('renders the StatusButton', () => {
	render(
		<StatusButton
			backgroundColor='E34023'
			textColor='3E323E'
			buttonValue='status'
		/>
	);
	const StatusButtonGrab = screen.getByTestId('status-button');
	expect(StatusButtonGrab).toBeInTheDocument();
});
