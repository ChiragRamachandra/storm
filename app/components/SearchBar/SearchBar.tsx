import { SearchIcon } from '@/app/icons/SearchIcon';
import React from 'react';

type Props = {};

const SearchBar = (props: Props) => {
	return (
		<div>
			<div className='flex items-center justify-cente'>
				<form>
					<div className='relative text-gray-600 focus-within:text-gray-400'>
						<span className='absolute inset-y-0 left-0 flex items-center pl-2'>
							<button
								type='submit'
								className='p-1 focus:outline-none focus:shadow-outline'
							>
								<SearchIcon />
							</button>
						</span>
						<input
							type='search'
							name='q'
							className='py-2 text-sm text-white  rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900'
							placeholder='Search'
						/>
					</div>
				</form>
				<button />
			</div>
		</div>
	);
};

export default SearchBar;
