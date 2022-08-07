const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const FILENAME = pkg.name + (isProduction ? '.min' : '');

const BANNER = [
  'TOAST UI Calendar 2nd Edition',
  '@version ' + pkg.version + ' | ' + new Date().toDateString(),
  '@author ' + pkg.author,
  '@license ' + pkg.license,
].join('\n');

const config = {
  entry: './src/ts/index.ts',
  output: {
    library: ['tui', 'Calendar'], // 라이브러리 네임스페이스 설정
    libraryTarget: 'umd', // 라이브러리 타겟 설정
    libraryExport: 'default',
    path: path.join(__dirname, 'dist'),
    filename: FILENAME + '.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      '@ui': path.resolve(__dirname, './src/ts/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: BANNER,
      entryOnly: true,
    }),
    new StyleLintPlugin(),
  ],
};

module.exports = config;
