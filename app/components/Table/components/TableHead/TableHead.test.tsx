// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TableHead from './TableHead';

test('renders the TableHead', () => {
	render(
		<TableHead
			id={'ID'}
			status={'Status'}
			quantity={'Quantity'}
			productName={'Product Name'}
			price={'Price'}
		/>
	);
	const TableHeadGrab = screen.getByTestId('table-head');
	expect(TableHeadGrab).toBeInTheDocument();
});

// renders
