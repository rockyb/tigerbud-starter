module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!react-native|react-navigation|@react-navigation/.*)/',
  ],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jestSetup.js',
  ],
  testPathIgnorePatterns: ['__tests__/utils/*'],
  modulePathIgnorePatterns: ['<rootDir>/amplify/#current-cloud-backend'],
};
