// MyComponent.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

test('renders the TableRow', () => {
	render(
		<TableRow
			id={'ID'}
			status={'Status'}
			quantity={'Quantity'}
			productName={'Product Name'}
			price={'Price'}
		/>
	);
	const TableRowGrab = screen.getByTestId('table-row-ID');
	expect(TableRowGrab).toBeInTheDocument();
});
