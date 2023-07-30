'use client';

import { ContainerLayout } from './components/ContainerLayout';
import { ItemsContextProvider } from './providers/itemsProvider';

export default function Home() {
	return (
		<ItemsContextProvider>
			<ContainerLayout />;
		</ItemsContextProvider>
	);
}
