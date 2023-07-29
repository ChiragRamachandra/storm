// module.exports = {
// 	testEnvironment: 'jsdom',
// 	moduleFileExtensions: ['ts', 'tsx', 'js'],
// 	transform: {
// 		'^.+\\.(ts|tsx)$': 'ts-jest',
// 	},
// 	testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
// };

const nextJest = require('next/jest');
const createJestConfig = nextJest({
	dir: './',
});
const customJestConfig = {
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
};
module.exports = createJestConfig(customJestConfig);
