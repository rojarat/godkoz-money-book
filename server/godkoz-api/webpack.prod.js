const path = require('path');
const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const plugins = [
  new NodemonPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      PORT: JSON.stringify(process.env.PORT),
      BASE_URL: JSON.stringify(process.env.BASE_URL),
    },
  }),
];

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  node: {
    __dirname: false,
  },
  mode: 'production',
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
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins,
  externals: [nodeExternals()],
};
