/// <reference types="cypress" />

describe('Navigation', () => {
	it('opens page', () => {
		// Load "http://localhost:3000/"
		cy.visit('http://localhost:3000/');

		// Resize window to 1920 x 963
		cy.viewport(1920, 963);

		// Click on <span>
		cy.get('.bg-blue-200 .font-thin').click();

		// Click on <button> "Close"
		cy.get('.mb-8').click();
	});
});

export {};
