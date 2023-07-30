import React, { useState } from 'react';
import { ItemProp } from '../data/itemsData';

interface ItemsContextProps {
	modalOpen: boolean;
	setModalOpen: (value: boolean) => void;
	itemsDataFetched: any;
	setItemsDataFetched: (items: any) => void;
	selectedItem: any;
	setSelectedItem: (items: any) => void;
	searchedString: any;
	setSearchedString: (searchedString: any) => void;
	itemsDataFiltered: any;
	setItemsDataFiltered: (items: any) => void;
}

export const ItemsContext = React.createContext<ItemsContextProps>({
	modalOpen: false,
	setModalOpen: () => {},
	itemsDataFetched: null,
	setItemsDataFetched: () => {},
	selectedItem: null,
	setSelectedItem: () => {},
	searchedString: '',
	setSearchedString: () => {},
	itemsDataFiltered: null,
	setItemsDataFiltered: () => {},
});

export const ItemsContextProvider = (props: any) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [itemsDataFetched, setItemsDataFetched] = useState<ItemProp[] | null>(
		null
	);
	const [itemsDataFiltered, setItemsDataFiltered] = useState<ItemProp[] | null>(
		null
	);
	const [selectedItem, setSelectedItem] = useState<any>(null);
	const [searchedString, setSearchedString] = useState<any>(null);

	return (
		<ItemsContext.Provider
			value={{
				modalOpen,
				setModalOpen,
				itemsDataFetched,
				setItemsDataFetched,
				selectedItem,
				setSelectedItem,
				searchedString,
				setSearchedString,
				itemsDataFiltered,
				setItemsDataFiltered,
			}}
		>
			{props.children}
		</ItemsContext.Provider>
	);
};
