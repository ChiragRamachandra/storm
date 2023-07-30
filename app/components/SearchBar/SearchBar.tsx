import { SearchIcon } from '@/app/icons/SearchIcon';
import React from 'react';

type Props = {};

const SearchBar = (props: Props) => {
	return (
		<div>
			<div className='flex items-center justify-between'>
				<div className='relative text-gray-600 mr-2'>
					<span className='absolute inset-y-0 left-0 flex items-center pl-2'>
						<div className='p-1 focus:shadow-outline'>
							<SearchIcon />
						</div>
					</span>
					<input
						name='search-bar'
						className='py-2 text-sm text-black rounded pl-10 border border-[#DCDFE3]'
						placeholder='Search'
					/>
				</div>

				<div className='inline-block rounded border border-[#605DEC] bg-[#605DEC] px-6 py-2 text-sm font-medium text-white'>
					Search
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
