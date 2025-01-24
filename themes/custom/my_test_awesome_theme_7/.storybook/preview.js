import { useEffect } from '@storybook/client-api';
import Twig from 'twig';
import { setupTwig } from './setupTwig';
import { withScreenshot } from 'storycap';

// jQuery
import './jquery-global.js';

// If in a Drupal project, it's recommended to import a symlinked version of drupal.js.
import './_drupal.js';

// Popper. Can be Included as a CDN dependency in the
import '@popperjs/core';

// Design tokens CSS root variables.
import '../dist/css/_00-design-tokens-root.css';

// Bootstrap
import '../components/00-bootstrap/styles/bootstrap.scss';
import '../components/00-bootstrap/js/bootstrap.js';

// GLOBAL CSS
import '../components/style.scss';
import jquery from "jquery";

/** @type { import('@storybook/html-webpack5').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    screenshot: {
      captureBeyondViewport: false,
      viewports: {
        xs: {
          width: 375,
          height: 576,
        },
        sm: {
          width: 576,
          height: 768,
        },
        md: {
          width: 768,
          height: 992,
        },
        lg: {
          width: 992,
          height: 1200,
        },
        xl: {
          width: 1200,
          height: 1400,
        },
        xxl: {
          width: 1400,
          height: 1600,
        },
      },
    },
  },
  decorators: [
    withScreenshot,
    (Story, { args }) => {
      const { renderAs } = args || {};

      // Usual emulsify hack to add Drupal behaviors.
      useEffect(() => {
        Drupal.attachBehaviors();
      }, [args]);

      return Story();
    },
  ],
};

setupTwig(Twig);

export default preview;
