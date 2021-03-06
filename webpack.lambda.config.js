const baseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge').smart;

const lambdaConfig = webpackMerge(baseConfig, {
  entry: {
    services: './services/index.js',
  },
  output: {
    libraryTarget: 'commonjs',
  },
  target: 'node',
  externals: [
    'aws-sdk',
    './client-digest',
  ],
});

module.exports = lambdaConfig;
