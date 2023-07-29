import React from 'react';
type Props = {};

const Table = (props: Props) => {
	return (
		<div className='bg-white shadow-md rounded my-4'>
			<table className='w-full table-fixed'>
				<thead>
					<tr className='bg-gray-200 text-center'>
						<th className='py-4 px-2 w-1/6'>ID</th>
						<th className='py-4 px-2 w-1/6'>Status</th>
						<th className='py-4 px-2 w-1/6'>Quantity</th>
						<th className='py-4 px-2 w-1/3'>Product Name</th>
						<th className='py-4 px-2 w-1/6'>Price</th>
					</tr>
				</thead>
				<tbody>
					<tr className='border-b'>
						<td className='py-2 px-2 text-center'>1</td>
						<td className='py-2 px-2 text-center'>Status</td>
						<td className='py-2 px-2 text-center'>5</td>
						<td className='py-2 px-2'>Macbook Pro 1</td>
						<td className='py-2 px-2 text-center'>$854.08</td>
					</tr>
					<tr className='border-b'>
						<td className='py-2 px-2 text-center'>2</td>
						<td className='py-2 px-2 text-center'>Status</td>
						<td className='py-2 px-2 text-center'>3</td>
						<td className='py-2 px-2'>Macbook Pro 2</td>
						<td className='py-2 px-2 text-center'>$943.65</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
