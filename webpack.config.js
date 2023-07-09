import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { VueLoaderPlugin } from 'vue-loader';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProductionMode = process.env.NODE_ENV === 'production';

export default {
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader', 
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.gif/,
        type: 'asset/resource'
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve('src'),
      'vue': 'vue/dist/vue.esm.js',
    },
  },
};
