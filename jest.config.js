module.exports = {
  // Direct Jest to ignore these paths when searching for tests
  testPathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "<rootDir>/coverage/",
    "<rootDir>/__tests__/e2e/",
    "<rootDir>/__tests__/performance/",
    // add other folders as needed
  ],
  // If you also want to ignore certain folders for code coverage,
  // you can specify them here:
  coveragePathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "<rootDir>/coverage/",
    "<rootDir>/__tests__/e2e/",
    "<rootDir>/__tests__/performance/",
  ],
};