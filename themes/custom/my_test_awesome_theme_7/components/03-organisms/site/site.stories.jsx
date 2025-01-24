import React from 'react';
import reactToHtml from '@degjs/storybook-decorator-react-to-html';

import footerTwig from './site-footer/site-footer.twig';
import headerTwig from './site-header/site-header.twig';
import headerATwig from './site-header/site-header-a/site-header-a.twig';
import footerATwig from './site-footer/site-footer-a/site-footer-a.twig';

import headerData from './site-header/site-header.yml';
import footerData from './site-footer/site-footer.yml';
import headerAData from './site-header/site-header-a/site-header-a.yml';
import footerAData from './site-footer/site-footer-a/site-footer-a.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Site',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [reactToHtml],
};

const TwigTemplateHeader = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: headerTwig({
        ...args,
      }),
    }}
  />
);

export const header = TwigTemplateHeader.bind({});

header.args = {
  ...headerData,
};

const TwigTemplateFooter = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: footerTwig({
        ...args,
      }),
    }}
  />
);

export const footer = TwigTemplateFooter.bind({});

footer.args = {
  ...footerData,
};

const TwigTemplateHeaderA = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: headerATwig({
        ...args,
      }),
    }}
  />
);

export const headerA = TwigTemplateHeaderA.bind({});

headerA.args = {
  content: headerAData.content,
};

const TwigTemplateFooterA = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: footerATwig({
        ...args,
      }),
    }}
  />
);

export const footerA = TwigTemplateFooterA.bind({});

footerA.args = {
  content: footerAData.content,
};
