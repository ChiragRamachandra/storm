// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders the header component', () => {
	render(<Header />);
});
