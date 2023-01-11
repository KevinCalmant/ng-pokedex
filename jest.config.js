module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
  coverageReporters: ['html', 'lcov'],
  collectCoverageFrom: ['src/app/**/*ts', '!src/app/**/*{routing,module}.ts'],
  testPathIgnorePatterns: ['node_modules', 'dist/', 'coverage/'],
};
