import { ItemProp } from '../data/itemsData';

const searchResults = (
	searchText: string,
	searchArray: ItemProp[]
): ItemProp[] => {
	const escapedSearchText = searchText.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
	const regex = new RegExp(escapedSearchText, 'i');

	const filteredResults = searchArray.filter((item) =>
		regex.test(item.product)
	);

	return filteredResults;
};

export { searchResults };
