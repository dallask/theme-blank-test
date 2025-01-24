const webpInCss = require('webp-in-css/plugin');
const autoPrefixer = require('autoprefixer');
const pxToRem = require('postcss-pxtorem');

module.exports = (argv) => {
  const config = {
    plugins: [webpInCss(), autoPrefixer()],
  };

  if (argv.env === 'production') {
    config.plugins.push(
      pxToRem({
        rootValue: 16,
        propList: [
          'font',
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'font-size',
          'line-height',
          'letter-spacing',
        ],
      }),
    );
  }

  return config;
};
