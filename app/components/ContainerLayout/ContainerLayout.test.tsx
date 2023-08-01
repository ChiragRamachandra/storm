import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ContainerLayout from './ContainerLayout';

describe('Container Component', () => {
	it('renders ContainerLayout without errors', () => {
		render(<ContainerLayout />);
	});
});
