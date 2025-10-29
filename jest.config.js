/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  // 1. Sagt Jest, es soll ts-jest für TypeScript-Dateien verwenden
  preset: 'ts-jest',

  // 2. Die Testumgebung ist 'node' (nicht 'jsdom' für Browser-Simulation)
  testEnvironment: 'node',

  // 3. WICHTIG: Sagt ts-jest, dass es ES-Module (ESM) verwenden soll
  transform: {
    '^.+\\.m?[tj]s$': ['ts-jest', {
      useESM: true,
    }],
  },

  // 4. WICHTIG: Sagt Jest, dass .ts-Dateien als ES-Module behandelt werden sollen
  extensionsToTreatAsEsm: ['.ts'],

  // 5. WICHTIG: Behandelt das ".js" am Ende von TypeScript-Importen
  // (Notwendig, weil du in package.json "type": "module" hast)
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};