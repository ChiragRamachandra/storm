import { searchResults } from './searchResults';

const items = [
	{
		product: 'Macbook Pro 16 inch (2020 ) For Sale',
		serial: 'BA9212320',
		id: 1374,
		quantity: 122,
		total: 854.08,
	},
	{
		product: 'Gaming Chair^2',
		serial: 'BA9212320',
		id: 3933,
		quantity: 245,
		total: 943.65,
	},
	{
		product: '$$ Kaching',
		serial: 'KH9212924',
		id: 9374,
		quantity: 134,
		total: 779.58,
	},
	{
		product: '**&& Mercy Buy $$',
		serial: 'SD9212969',
		id: 5560,
		quantity: 26,
		total: 275.43,
	},
	{
		product: '/ SWE Buy $$',
		serial: 'SD9212969',
		id: 5560,
		quantity: 26,
		total: 275.43,
	},
];

describe('search results', () => {
	it("Returns matched item when searchText matches an item's product", () => {
		const searchText = 'Gaming Chair';
		const result = searchResults(searchText, items);
		expect(result).toEqual([
			{
				product: 'Gaming Chair^2',
				serial: 'BA9212320',
				id: 3933,
				quantity: 245,
				total: 943.65,
			},
		]);
	});

	it("Returns an empty array when searchText does not match any item's product", () => {
		const searchText = 'Monitor';
		const result = searchResults(searchText, items);
		expect(result).toEqual([]);
	});

	it('Performs case-insensitive search', () => {
		const searchText = 'mACbOOK pRO';
		const result = searchResults(searchText, items);
		expect(result).toEqual([
			{
				product: 'Macbook Pro 16 inch (2020 ) For Sale',
				serial: 'BA9212320',
				id: 1374,
				quantity: 122,
				total: 854.08,
			},
		]);
	});

	it('Handles special characters in searchText', () => {
		const searchText = '^2';
		const result = searchResults(searchText, items);
		expect(result).toEqual([
			{
				product: 'Gaming Chair^2',
				serial: 'BA9212320',
				id: 3933,
				quantity: 245,
				total: 943.65,
			},
		]);
	});

	it('Handles searchText with regular expression special characters', () => {
		const searchText = '$$ Ka';
		const result = searchResults(searchText, items);
		expect(result).toEqual([
			{
				product: '$$ Kaching',
				serial: 'KH9212924',
				id: 9374,
				quantity: 134,
				total: 779.58,
			},
		]);
	});

	it('Handles multiple special characters in searchText', () => {
		const searchText = '**&&';
		const result = searchResults(searchText, items);
		expect(result).toEqual([
			{
				product: '**&& Mercy Buy $$',
				serial: 'SD9212969',
				id: 5560,
				quantity: 26,
				total: 275.43,
			},
		]);
	});
	it('Handles backslash special character in searchText', () => {
		const searchText = '/ SWE';
		const result = searchResults(searchText, items);
		expect(result).toEqual([
			{
				product: '/ SWE Buy $$',
				serial: 'SD9212969',
				id: 5560,
				quantity: 26,
				total: 275.43,
			},
		]);
	});
});
