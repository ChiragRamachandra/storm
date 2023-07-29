// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserIcon from './UserIcon';

test('renders the UserIcon', () => {
	render(<UserIcon />);
	const UserIconGrab = screen.getByTestId('user-icon');
	expect(UserIconGrab).toBeInTheDocument();
});
