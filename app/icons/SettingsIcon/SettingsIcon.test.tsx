// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SettingsIcon from './SettingsIcon';

test('renders the SettingsIcon', () => {
	render(<SettingsIcon />);
	const SettingsIconGrab = screen.getByTestId('settings-icon');
	expect(SettingsIconGrab).toBeInTheDocument();
});
