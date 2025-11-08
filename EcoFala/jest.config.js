module.exports = {
  preset: 'jest-expo',          // preset do Expo para React Native
  testEnvironment: 'node',      // ambiente de teste
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect' // para matchers do testing-library
  ],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native|@react-navigation))"
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx'
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/android/",
    "/ios/"
  ],
};
