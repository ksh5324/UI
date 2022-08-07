const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const context = JSON.stringify({ CSS_PREFIX: 'tui-full-calendar-' });
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPrefixer = require('postcss-prefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const FILENAME = pkg.name + (isProduction ? '.min' : '');
const isDevServer = process.env.DEV_SERVER === 'true';

const BANNER = [
  'TOAST UI Calendar 2nd Edition',
  '@version ' + pkg.version + ' | ' + new Date().toDateString(),
  '@author ' + pkg.author,
  '@license ' + pkg.license,
].join('\n');

const config = {
  entry: ['./src/sass/index.scss', './src/ts/index.ts'],
  output: {
    library: ['tui', 'Calendar'], // 라이브러리 네임스페이스 설정
    libraryTarget: 'umd', // 라이브러리 타겟 설정
    libraryExport: 'default',
    path: path.join(__dirname, 'dist'),
    filename: FILENAME + '.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@ui': path.resolve(__dirname, './src/ts/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.styl$/,
        use: [`preprocess-loader?${context}`, 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isDevServer ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: { prefix: 'tui-full-calendar-' },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: 'url-loader',
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: BANNER,
      entryOnly: true,
    }),
    new StyleLintPlugin(),
    new MiniCssExtractPlugin({
      filename: `${FILENAME}.css`,
    }),
    new HtmlWebpackPlugin(),
    // new ESLintPlugin('.eslintrc.js'),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: false,
    host: '0.0.0.0',
    // disableHostCheck: true,
  },
  stats: { children: true },
};

module.exports = config;
