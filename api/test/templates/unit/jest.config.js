// Jest config file example:

module.exports = {
  name: 'unit',
  displayName: 'Unit Tests',

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  rootDir: '../../../',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src/'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  testMatch: [
    `**/${process.env.MATCH || ''}?(*.)+(spec.unit|test.unit).[jt]s?(x)`,
  ],
}
