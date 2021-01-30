const path = require('path');
const Dotenv = require('dotenv-webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const plugins = [
  new NodemonPlugin(),
  new Dotenv({
    path: path.resolve(__dirname, './.env'),
  }),
];

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  node: {
    __dirname: false,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins,
  externals: [nodeExternals()],
};
