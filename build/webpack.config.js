const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const devCongfig = require('./webpack.dev.config.js');
const proConfig = require('./webpack.pro.config.js');

let config = process.NODE_ENV === 'development' ? devCongfig : proConfig;

module.exports = merge(baseConfig, config);