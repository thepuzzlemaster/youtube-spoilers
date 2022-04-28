const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    removeSpoilers: path.resolve(__dirname, 'src', 'removeSpoilers.ts'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: '.', to: '.', context: 'public' }],
    }),
  ],
}
