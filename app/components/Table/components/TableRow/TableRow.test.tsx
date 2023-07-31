import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

test('renders the TableRow', () => {
	render(
		<TableRow
			id={122}
			status={'Status'}
			quantity={100}
			productName={'Product Name'}
			price={122}
			serial='serialNumber'
			onClick={() => {}}
			onSelect={() => {}}
		/>
	);
	const TableRowGrab = screen.getByTestId('table-row-122');
	expect(TableRowGrab).toBeInTheDocument();
});
