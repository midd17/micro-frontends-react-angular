const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false
  },

  output: {
    publicPath: 'http://localhost:3000/',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-typescript')],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      library: { type: 'var', name: 'shell' },
      filename: 'remoteEntry.js',
      remotes: {
        'navigation': 'navigation',
        'posts': 'posts',
      },
      exposes: {},
      shared: {
        '@angular/core': { singleton: true, eager: true }, 
        '@angular/common': { singleton: true }, 
        '@angular/platform-browser-dynamic': { singleton: true }, 
        '@angular/platform-browser': { singleton: true }, 
        'single-spa-angular': { singleton: true },
        'zone.js': { singleton: true },
        'core-js/features/reflect': { singleton: true },
        'react': { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        'single-spa-react': { singleton: true }
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
