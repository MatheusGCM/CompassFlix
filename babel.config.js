/* eslint-disable no-undef */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@pages': './src/pages',
          '@components': './src/components',
          '@services': './src/services',
          '@context': './src/context',
          '@assets': './src/assets',
          '@routes': './src/routes',
          '~utils': './src/utils',
          '@types': './src/types',
        },
      },
    ],
  ],
};
