const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = async function (env, argv) {
  // Получение базовой конфигурации Expo
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Добавление плагина Node.js полифиллов
  config.plugins = config.plugins || [];
  config.plugins.push(new NodePolyfillPlugin());

  // Добавление fallback для Node.js модулей
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
      util: require.resolve('util/'),
      assert: require.resolve('assert/'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      url: require.resolve('url/'),
    },
  };

  return config;
};
