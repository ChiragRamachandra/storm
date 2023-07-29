// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NotificationIcon from './NotificationIcon';

test('renders the NotificationIcon', () => {
	render(<NotificationIcon />);
	const NotificationIconGrab = screen.getByTestId('notification-icon');
	expect(NotificationIconGrab).toBeInTheDocument();
});
