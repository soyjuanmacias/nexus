module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: '<rootDir>/coverage',
  moduleNameMapper: {
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Containers(.*)$': '<rootDir>/src/containers$1',
  },
};
