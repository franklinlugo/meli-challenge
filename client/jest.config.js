module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.css$': '<rootDir>/__mocks__/styleMock.js',
    '^@pages$': '<rootDir>/src/pages',
    '^shared$': '<rootDir>/src/shared',
    '^services$': '<rootDir>/src/services',
    '^styles$': '<rootDir>/src/styles',
    '^assets$': '<rootDir>/src/assets',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
  },
};
