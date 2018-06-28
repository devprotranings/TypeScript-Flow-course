module.exports = {
  "moduleNameMapper": {
    "\\.(css|scss)$": "<rootDir>/client/__mocks__/styleMock.js"
  },
  "transform": {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "testMatch": [
    "<rootDir>/**/*.spec.{ts,tsx}",
  ],
  "collectCoverage": true,
  "coverageReporters": ["text-summary"],
  "collectCoverageFrom": [
    "**/*.{ts,tsx}"
  ],
  "silent": false,
  "moduleFileExtensions": [
    "ts",
    "js",
    "tsx"
  ]
};