const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const devCongfig = require('./webpack.dev.config.js');
const proConfig = require('./webpack.pro.config.js');



module.exports = (env, argv) => {
  let config = argv.mode === 'development' ? devCongfig : proConfig;
  return merge(baseConfig, config);
}