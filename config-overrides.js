const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');
const rewireYAML = require('react-app-rewire-yaml');

// 設定 JS 可以讀取 YAML
const yamlOverride = (config, env) => {
  config = rewireYAML(config, env);
  return config;
}

module.exports = override(
  yamlOverride,
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    // ['@Apis']: path.resolve(__dirname, 'src/Apis/Functions'),
    ['@Assets']: path.resolve(__dirname, 'src/Assets'),
    // ['@Auth']: path.resolve(__dirname, 'src/Auth'),
    ['@Components']: path.resolve(__dirname, 'src/Components'),
    ['@Config']: path.resolve(__dirname, 'src/Config'),
    // ['@GlobalStores']: path.resolve(__dirname, 'src/GlobalStores'),
    ['@Locales']: path.resolve(__dirname, 'src/Locales'),
    ['@Styles']: path.resolve(__dirname, 'src/Styles'),
    // ['@Pages']: path.resolve(__dirname, 'src/Pages'),
    // ['@Routes']: path.resolve(__dirname, 'src/Routes'),
    // ['@Utils']: path.resolve(__dirname, 'src/Utils'),
  })
);
