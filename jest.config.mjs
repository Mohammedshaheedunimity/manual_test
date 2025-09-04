// Jest configuration for ES modules
export default {
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/playwright-tests/',
  ],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'],
};
