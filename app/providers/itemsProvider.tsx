import React, { useState } from 'react';
import { ItemProp } from '../data/itemsData';

interface ItemsContextProps {
	modalOpen: boolean;
	setModalOpen: (value: boolean) => void;
	itemsDataFetched: any;
	setItemsDataFetched: (items: any) => void;
	selectedItem: any;
	setSelectedItem: (items: any) => void;
}

export const ItemsContext = React.createContext<ItemsContextProps>({
	modalOpen: false,
	setModalOpen: () => {},
	itemsDataFetched: null,
	setItemsDataFetched: () => {},
	selectedItem: null,
	setSelectedItem: () => {},
});

export const ItemsContextProvider = (props: any) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [itemsDataFetched, setItemsDataFetched] = useState<ItemProp[] | null>(
		null
	);
	const [selectedItem, setSelectedItem] = useState<any>(null);

	return (
		<ItemsContext.Provider
			value={{
				modalOpen,
				setModalOpen,
				itemsDataFetched,
				setItemsDataFetched,
				selectedItem,
				setSelectedItem,
			}}
		>
			{props.children}
		</ItemsContext.Provider>
	);
};
