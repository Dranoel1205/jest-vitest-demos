/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',

  testEnvironment: 'node',

  transform: {
    '^.+\\.m?[tj]s$': ['ts-jest', {
      useESM: true,
    }],
  },

  extensionsToTreatAsEsm: ['.ts'],

  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};