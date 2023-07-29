// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Table from './Table';

test('renders the header component', () => {
	render(<Table />);
});
