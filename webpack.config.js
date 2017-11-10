const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  plugins: [
    new DashboardPlugin({ port: 7000 })
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'env', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline: true,
    port: 7000
  }
};
