const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ["nativewind"],
      },
    },
    argv,
  );

  // Добавление правил для пост-обработки CSS
  config.module.rules.push({
    test: /\.css$/i,
    use: ["postcss-loader"],
  });

  return config;
};
