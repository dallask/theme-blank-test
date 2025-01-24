const path = require("path");

module.exports = {
  stories: [
    '../docs/**/*.stories.mdx',
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
    'storybook-design-token',
    'storycap',
  ],
  staticDirs: [{from: '../docs/img', to: 'docs'}, '../dist', '../images', '../fonts'],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      plugins: config.plugins.filter((plugin) => {
        if(plugin.constructor.name === 'ESLintWebpackPlugin') {
          return false;
        }
        return true;
      }),
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@base': path.join(__dirname, '../', 'components/00-base'),
          '@bootstrap': path.join(__dirname, '../', 'components/00-bootstrap'),
          '@atoms': path.join(__dirname, '../', 'components/01-atoms'),
          '@molecules': path.join(__dirname, '../', 'components/02-molecules'),
          '@organisms': path.join(__dirname, '../', 'components/03-organisms'),
          '@templates': path.join(__dirname, '../', 'components/04-templates'),
          '@pages': path.join(__dirname, '../', 'components/05-pages'),
        }
      }
    };
  },
};
