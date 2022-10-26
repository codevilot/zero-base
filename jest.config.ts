module.exports = {
	testEnvironment: 'jsdom',
	transform: {
    '\\.js$': 'babel-jest',
  },
	testPathIgnorePatterns: ['/node_modules/'],
	setupFilesAfterEnv: ['./jest.setup.js'],
}