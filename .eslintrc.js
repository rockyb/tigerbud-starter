module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['e2e/**', '**/__mocks__/**'],
      env: {
        jest: true,
      },
    },
  ],
  plugins: ['detox'],
};
