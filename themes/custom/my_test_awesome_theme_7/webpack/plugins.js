/* eslint-disable no-underscore-dangle */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _ImageminPlugin = require('imagemin-webpack-plugin').default;
const _SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const _CopyWebpackPlugin = require('copy-webpack-plugin');
const _ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const glob = require('glob');
const _BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const config = require('./config');

const BrowserSyncPlugin = new _BrowserSyncPlugin(
  {
    proxy: config.localServer,
    port: 32778,
    open: false,
    files: [
      {
        match: [
          'dist/**/*.css',
          'dist/**/*.js',
          '**/*.php',
          '**/*.theme',
          '**/*.twig',
        ],
        fn: (event, file) => {
          if (event === 'change') {
            const bs = require('browser-sync').get('bs-webpack-plugin');
            if (
              file.split('.').pop() === 'js' ||
              file.split('.').pop() === 'php' ||
              file.split('.').pop() === 'theme' ||
              file.split('.').pop() === 'twig'
            ) {
              bs.reload();
            } else {
              bs.reload(file);
            }
          }
        },
      },
    ],
  },
  // plugin options
  {
    // prevent BrowserSync from reloading the page
    // and let Webpack Dev Server take care of this
    reload: false,
    injectCss: true,
  }
);

const imageTypes = '**/*.{png,jpg,gif,svg}';
const imagePath = path.resolve(__dirname, '../images');
const imagePathComponents = path.resolve(__dirname, '../components');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css',
});

const ImageminPlugin = new _ImageminPlugin({
  disable: process.env.NODE_ENV !== 'production',
  externalImages: {
    context: imagePath,
    sources: [
      glob.sync(path.resolve(imagePath, imageTypes)),
      glob.sync(path.resolve(imagePathComponents, imageTypes))
    ],
    destination: imagePath,
  },
});

const CopyWebpackPlugin = new _CopyWebpackPlugin({
  patterns: [
    {
      from: 'images/',
      to: 'images/',
    },
    {
      from: `components/${imageTypes}`,
      to({ context, absoluteFilename }) {
        const filePath = absoluteFilename.split(
          path.resolve('./components/'),
        )[1];
        return Promise.resolve(path.resolve(`dist/css${filePath}`));
      },
    },
    {
      from: 'dist/css/_00-design-tokens-root.css',
      to: 'css/root.css',
    },
    {
      from: 'fonts/**/*.*',
      to: './',
    },
  ],
});

const ImageminWebpWebpackPlugin = new _ImageminWebpWebpackPlugin({
  detailedLogs: true,
  overrideExtension: true,
  config: [{
    test: /\.(jpe?g|png|gif)/,
    options: {
      quality:  75
    }
  }],
});

const SpriteLoaderPlugin = new _SpriteLoaderPlugin({
  plainSprite: true,
});

const ProgressPlugin = new webpack.ProgressPlugin();

module.exports = {
  ProgressPlugin,
  MiniCssExtractPlugin,
  ImageminPlugin,
  CopyWebpackPlugin,
  ImageminWebpWebpackPlugin,
  BrowserSyncPlugin,
  SpriteLoaderPlugin,
  CleanWebpackPlugin: new CleanWebpackPlugin({
    protectWebpackAssets: false, // Required for removal of extra, unwanted dist/css/*.js files.
    cleanOnceBeforeBuildPatterns: ['!*.{png,jpg,gif,svg}'],
    cleanAfterEveryBuildPatterns: [
      'remove/**',
      '!js',
      'css/**/*.js', // Remove all unwanted, auto generated JS files from dist/css folder.
      'css/**/*.js.map',
      '!*.{png,jpg,gif,svg}',
    ],
  }),
};
