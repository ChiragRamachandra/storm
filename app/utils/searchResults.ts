import { ItemProp } from '../data/itemsData';

const searchResults = (
	searchText: string,
	searchArray: ItemProp[]
): ItemProp[] => {
	const filteredResults = searchArray.filter((item) =>
		item.product.toLowerCase().includes(searchText.toLowerCase())
	);

	return filteredResults;
};

export { searchResults };
