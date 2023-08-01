import { useItems } from '@/app/hooks/useItems';
import { debounce } from 'lodash';
import { SearchIcon } from '@/app/icons/SearchIcon';
import React, { useState } from 'react';
import { searchResults } from '@/app/utils/searchResults';

type Props = {};

const SearchBar = (props: Props) => {
	const {
		searchedString,
		setSearchedString,
		setItemsDataFiltered,
		itemsDataFetched,
	} = useItems();
	const [inputValue, setInputValue] = useState<string>(searchedString);

	const debounceSearch = debounce((searchText: string) => {
		setSearchedString(searchText);
	}, 500);

	const handleInputChange = (event: any) => {
		const searchText = event.target.value;
		setInputValue(searchText);

		//debounced incase search uses an api to return the values
		debounceSearch(searchText);
	};

	const handleSearchClicked = () => {
		console.log('search clicked', searchedString);
		setItemsDataFiltered(searchResults(searchedString, itemsDataFetched));
	};

	return (
		<div data-testid='search-bar'>
			<div className='flex items-center justify-between'>
				<div className='relative text-gray-600 mr-2'>
					<span className='absolute inset-y-0 left-0 flex items-center pl-2'>
						<div className='p-1 focus:shadow-outline'>
							<SearchIcon />
						</div>
					</span>
					<input
						name='search-bar'
						value={inputValue}
						onChange={handleInputChange}
						className='py-2 text-sm text-black rounded pl-10 border border-[#DCDFE3]'
						placeholder='Search'
					/>
				</div>

				<button
					data-testid='search-bar-button'
					className='inline-block rounded border border-[#605DEC] bg-[#605DEC] px-6 py-2 text-sm font-medium text-white'
					onClick={handleSearchClicked}
				>
					Search
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
