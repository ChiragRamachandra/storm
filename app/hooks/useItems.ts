import { useContext } from 'react';
import { ItemsContext } from '../providers/itemsProvider';

export function useItems() {
	const viewItemsContext = useContext(ItemsContext);

	return viewItemsContext;
}
